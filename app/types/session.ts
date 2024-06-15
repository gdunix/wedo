export type User = {
  id: number;
  email: string;
  role: string;
};

export type Payload = {
  user: User;
  expires: Date;
};

export type Session = {
  payload: Payload
};
