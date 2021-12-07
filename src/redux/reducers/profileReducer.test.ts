import profileReducer, {PostTypeA, InitialStatePostsType, addPostAC} from "./profileReducer";

test("correct add newPost", () => {
    //data
    let initialState: InitialStatePostsType = {
        posts: [
            {id: 1, postText: 'Its my first postText', likesCount: 12},
            {id: 2, postText: 'Hello, how are you', likesCount: 10},
            {id: 3, postText: 'I am fine', likesCount: 5},
            {id: 4, postText: 'Good', likesCount: 8},
            {id: 5, postText: 'See you', likesCount: 3}
        ],
        newText: ""
    };

    const newPostText = "it so good";
    // action
    let result = profileReducer(initialState, addPostAC(newPostText));
    // expect
    expect(result.posts.length).toBe(6);
    expect(result.posts[5].postText).toBe("it so good");
})