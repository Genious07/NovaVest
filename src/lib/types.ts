export type Segment = {
  text: string;
  style: 'normal' | 'think';
};

export interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string | Segment[];
  isStreaming?: boolean;
  thinkingSegments?: Segment[];
  thinkingTime?: number;
}
