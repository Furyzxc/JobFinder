import s from './posts.module.css'


import React, { useState } from "react";


export const Posts = () => {

    const [postText, setPostText] = useState('')
    const [posts, setPosts] = useState<{ text: string }[]>([]);

    const handlePostText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setPostText(text)
    }

    const handleSendClick = () => {
        setPosts([...posts, {text: postText}])
        setPostText('')
    }

    return (
        <div className={s.posts}>
            <div>
                My Posts
            </div>

            <input value={postText}
                   onChange={handlePostText}/>

            <button onClick={handleSendClick}>
                Send
            </button>

            <div>
                {posts?.map((post, index) => {
                    return (
                        <div key={index}>
                            {post.text}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}