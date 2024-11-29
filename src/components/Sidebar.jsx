import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src='https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar} 
                    src='https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <strong>John Doe</strong>
                <span>Worker</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Edit Profile
                </a>
            </footer>
        </aside>
    )
}