import {api} from "./api.ts";
import {
    GetDialogsResponse, GetMessagesRequest, GetMessagesResponse,
    SendMessageRequest,
    SendMessageResponse,
    StartChattingResponse
} from "../types/api/dialogs-types.ts";

export const dialogsApi = api.injectEndpoints({
    endpoints: build => ({

        // get list of dialogs with your friend

        getDialogs: build.query<GetDialogsResponse[], void>({
            query: () => 'dialogs'
        }),

        // get list of messages with your friend
        getMessages: build.query<GetMessagesResponse, GetMessagesRequest>({
            query: ({id, count = 20}) => 'dialogs/' + id + `/messages?count=${count}`
        }),

        // Start dialog with a person
        startChatting: build.mutation<StartChattingResponse, number>({
            query: (userId) => ({
                url: 'dialogs/' + userId,
                method: 'put'
            })
        }),

        //send message to your friend

        sendMessage: build.mutation<SendMessageResponse, SendMessageRequest>({
            query: ({userId, body}) => ({
                url: 'dialogs/' + userId + '/messages',
                method: 'post',
                body: {body}
            })
        })
    })
})

export const {
    useStartChattingMutation,
    useLazyGetMessagesQuery,
    useGetDialogsQuery
} = dialogsApi