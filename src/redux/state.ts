
export type PostType = {
    id: number
    postText: string
    likesCount: number
}

export type UserType = {
    id: number
    user: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilesType = {
    posts: Array<PostType>
    newText: string
}

export type DialogsType = {
    users: Array<UserType>
    messages: Array<MessageType>
    newMessageText: string
}

export type StateType = {
    profiles: ProfilesType
    dialogs: DialogsType
}

export type StorageType = {
    state: StateType
    addPost: (post: string) => void
    addNewPostText: (text: string) => void
    addNewMessage: (messageText: string) => void
    addNewMessageText: (text: string) => void
    dispatch: (action: ActionType) => void
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export type profilesPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionType) => void
    newPost: string

}

export type DialogsPropsType = {
    users: Array<UserType>
    messages: Array<MessageType>
    dispatch: (action: ActionType) => void
    newMessageText: string
}

export type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof updateNewMessageAC>;

export const addPostAC = (postText: string) => {
    return  {type: "ADD_POST", postText: postText} as const;
};

export const updateNewPostAC = (text: string) => {
    return  {type: "UPDATE_NEW_POST", newText: text} as const;
};

export const addNewMessageAC = (text: string) => {
    return {type: "ADD_NEW_MESSAGE", newText: text} as const;
};

export const updateNewMessageAC = (text: string) => {
    return {type: "UPDATE_NEW_MESSAGE", newText: text} as const;
};

export const storage: StorageType = {

    state: {

        profiles: {
            posts: [
                {id: 1, postText: 'Its my first postText', likesCount: 12},
                {id: 2, postText: 'Hello, how are you', likesCount: 10},
                {id: 3, postText: 'I am fine', likesCount: 5},
                {id: 4, postText: 'Good', likesCount: 8},
                {id: 5, postText: 'See you', likesCount: 3}
            ],
            newText: ""
        },

        dialogs: {
            users: [
                {id: 1, user: 'Max Volkov'},
                {id: 2, user: 'Alex Brown'},
                {id: 3, user: 'Ann Kolinz'},
                {id: 4, user: 'Kriss Nollan'}
            ],
            messages: [
                {id: 1, message: 'Hello, how are you'},
                {id: 2, message: 'I am fine'},
                {id: 3, message: 'Are you sleeping?'},
                {id: 4, message: 'Yes it is'}
            ],
            newMessageText: ""
        }
    },
    addPost(postText: string) {
        let newPost: PostType = {
            id: 6,
            postText: postText,
            likesCount: 7
        }
        this.state.profiles.posts.push(newPost);
        this.renderEntireTree();
    },

    addNewPostText(text: string) {
        this.state.profiles.newText = text;
        this.renderEntireTree();
    },

    addNewMessage(messageText: string) {
        let newMessage: MessageType = {
            id: 5,
            message: messageText
        }
        this.state.dialogs.messages.push(newMessage);
        this.renderEntireTree();
    },

    addNewMessageText(text: string) {
        this.state.dialogs.newMessageText = text;
        this.renderEntireTree();
    },

    dispatch(action) {
        if(action.type === "ADD_POST") {
            this.addPost(action.postText);
        } else if(action.type === "UPDATE_NEW_POST") {
            this.addNewPostText(action.newText);
        } else if (action.type === "ADD_NEW_MESSAGE") {
            this.addNewMessage(action.newText);
        } else if (action.type === "UPDATE_NEW_MESSAGE") {
            this.addNewMessageText(action.newText);
        }
    },

    renderEntireTree() {

    },

    subscribe(observer){
        this.renderEntireTree = observer;
    },

    getState() {
        return this.state
    }

}

