import React from 'react'
import s from './Post.module.css'




const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.item}>пости</div>
            <div className={s.item}>пости</div>
            <div className={s.item}>пости</div>
        </div>
    )
}

export default Post;