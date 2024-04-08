export type UserData = {
  id: number;
  avatar: string;
  messages?: Message[];
  name: string;
};

export interface Message {
  id: string;
  avatar: string;
  name: string;
  message: string;
}

export interface User {
  id: number;
  avatar: string;
  messages: Message[];
  name: string;
}

export const user: UserData = {
  id: 1,
  name: 'User',
  avatar: 'https://api.dicebear.com/8.x/pixel-art/svg',
  messages: [],
};

export const recipient: UserData = {
  id: 2,
  name: 'ThriveStart',
  avatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=2',
  messages: [],
};
