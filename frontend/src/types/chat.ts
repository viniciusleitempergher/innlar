import { MessageType } from './message'
import { UserType } from './user'

export type ChatType = {
    users: Array<UserType>;
    messages: Array<MessageType>;
}