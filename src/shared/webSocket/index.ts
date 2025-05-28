import * as T from '@/shared/types';

import SockJS from 'sockjs-client';
import { Client, IFrame, Message } from '@stomp/stompjs';

export class WebSocketClient {
  private client: Client;

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS(`${import.meta.env.VITE_API_URL}/ws`),
      reconnectDelay: 5000,             // 재연결 시도
      heartbeatIncoming: 5000,          // 서버에서 클라이언트로 데이터 수신 간격
      heartbeatOutgoing: 3000,          // 클라이언트에서 서버로 데이터 전송 간격
    });
  }
  /**
   * 웹소켓 연결
   * @param callback - 메시지 수신 콜백
   */
  connect(callback: (data: T.WSCatData) => void) {
    this.client.onConnect = () => {
      // 연결 성공 후 메시지 전송
      this.sendMessage({ message: 'WebSocket Start' });

      // '/topic/cat' 토픽 구독 시작
      this.client.subscribe('/topic/cat', (message: Message) => {
        const data = JSON.parse(message.body);
        callback(data);
      });
      // Session 기반 전용 구독 시작
      this.client.subscribe('/cat/queue/private', 
        (message: Message) => {
          const data = JSON.parse(message.body);
          callback(data);
        },
      );
    };

    this.client.onStompError = (frame: IFrame) => {
      console.error('Broker reported error: ' + frame.headers.message);
      console.error('Additional details: ' + frame.body);
    };

    this.client.onWebSocketError = (event: Event) => {
      console.error('WebSocket Error:', event);
    };

    this.client.activate();
  }
  /**
   * 웹소켓 연결 해제
   */
  disconnect() {
    this.client.deactivate();
  }
  /**
   * 메시지 전송
   * @param payload - 전송할 데이터
   */
  sendMessage(payload: Record<string, unknown>) {
    if (this.client.connected) {
      this.client.publish({
        destination: '/app/cat',
        body: JSON.stringify(payload),
      });
    } else {
      console.warn('WebSocket is not connected. The message could not be sent');
    }
  }
}