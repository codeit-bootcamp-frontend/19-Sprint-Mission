export interface Comment {
  id: number;
  writer: { image: string; nickname: string; id: number };
  updatedAt: string;
  createdAt: string;
  content: string;
}
