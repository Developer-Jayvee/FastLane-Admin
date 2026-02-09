import Link from "next/link";
import {
    NAV_LINKS
} from "@/constants/index"
import styles from "@/components/layout/SideBar/sideBar.module.css";
export default function SideBar() {
    return (
        <aside className={styles.sideBar} >
            <div className="logo-section">
                <h1 className="logo-text">Nike Admin</h1>
            </div>
            <div className={styles.navMenu}>
                <ul>
                    {
                        NAV_LINKS.map( (link,index) => 
                        <li className="nav-item" key={index}>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                        )
                    }
                </ul>
            </div>
            <div className={styles.userMenu}>
                <ul>
                    <li className="nav-item">Settings</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Logout</li>
                </ul>
            </div>
        </aside>
    )

}