

export type PostType = {
    id: number
    postText: string
    likesCount: number
}

export type InitialStateProfileType = {
    posts: Array<PostType>
    newText: string
}

export type ActionsProfilesType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC>;

const initialState: InitialStateProfileType = {
    posts: [
        {id: 1, postText: 'Its my first postText', likesCount: 12},
        {id: 2, postText: 'Hello, how are you', likesCount: 10},
        {id: 3, postText: 'I am fine', likesCount: 5},
        {id: 4, postText: 'Good', likesCount: 8},
        {id: 5, postText: 'See you', likesCount: 3},
    ],
    newText: ""
}

const profilesReducer = (state: InitialStateProfileType = initialState, action: ActionsProfilesType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostType = {
                id: 6,
                postText: action.postText,
                likesCount: 7
            }
            return {...state, posts: [...state.posts, newPost], newText: ""};
        case "UPDATE_NEW_TEXT":
            return {...state, newText: action.newText};
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => {
    return  {type: "ADD_POST", postText: postText} as const;
};

export const updateNewTextAC = (text: string) => {
    return  {type: "UPDATE_NEW_TEXT", newText: text} as const;
};

export default profilesReducer;