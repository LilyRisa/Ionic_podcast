export interface Message {
  title: string;
  descriptions: string;
  path_audio: string;
  images: string;
  created_at: string;
  id: number;
}

const messages: Message[] =[];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
