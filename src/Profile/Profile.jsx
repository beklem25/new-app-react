import React from 'react'
import s from './Profile.module.css'



const Profile = () => {
    return (
        <div className={s.profile}>
            <div className='item'>
                профіль користувача
            </div>
            <div className='item'>
                пост 1
            </div>
            <div className='item'>
                пост 2
            </div>
        </div>
    )
}

export default Profile;