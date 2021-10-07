import { UserType } from "./user";

export type MessageType = {
    id: string;
    timestamp: Date;
    text: string;
    sender: UserType;
}