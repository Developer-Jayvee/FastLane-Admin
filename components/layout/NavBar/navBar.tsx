
import styles from "@/components/layout/NavBar/navBar.module.css";
import { Icon } from "@/hooks/useIcons";
import SAMPLEPROFILE from "@/public/images/SELF IMAGE.jpg"
export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <h2>Hello , Jayvee Hidlao</h2>
            <div className="search-input">
                <input type="text" placeholder="Search..." />
            </div>
           <div className={styles.userActions}>
                <button type="button" >
                    <Icon name="bell" />
                </button>
                <button type="button" >
                    <Icon name="mail" />
                </button>
                 <div className={styles.userImage}>
                    <img src={SAMPLEPROFILE.src} alt="Profile" />
                </div>
                <p>Jayvee Hidlao</p>
           </div>
        </nav>
    );
}