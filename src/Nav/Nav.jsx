import React from 'react'
import s from'./Nav.module.css'



const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>меню nav </div>
            <div>Пофіль</div>
            <div className={s.item}>Повідомлення</div>

        </nav>
    )
}

export default Nav;