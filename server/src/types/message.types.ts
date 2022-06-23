export interface Message {
  id: number;
  fromUserId: number;
  toUserId: number;
  listingId: number;
  content: string;
  dateTime: number;
}
