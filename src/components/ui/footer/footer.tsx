import styles from "./footer.module.css";
import logo from "/favicon.ico";
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.png';

export default function Footer() {

    return(
        <footer className={styles.footer}>
            <div className="left">
                <img src={logo} alt="Rick and Morty logo" width={50} height={50}/>
                <p>Created by <a href="https://www.linkedin.com/in/ra%C3%BAl-s%C3%A1nchez-0a290b236">Raúl Sánchez</a></p>
                <a className={styles.a} href="https://www.flaticon.es/iconos-gratis/linkedin" target="_blank" title="linkedin iconos">Linkedin icon created by Freepik - Flaticon</a>
                <br></br>
                <a className={styles.a} href="https://www.flaticon.com/free-icons/github" target="_blank" title="github icons">Github icons created by riajulislam - Flaticon</a>
                <a className={styles.a} target="_blank" href="https://icons8.com/icon/82712/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a className={styles.a} target="_blank" href="https://icons8.com/icon/82749/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a className={styles.a} target="_blank" href="https://icons8.com/icon/99512/arrow-pointing-left">Back</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
            <div className="right">
                <a className={styles.a} href="https://www.linkedin.com/in/ra%C3%BAl-s%C3%A1nchez-0a290b236" target="_blank" title="Raúl-linkedin">
                    <img className={styles.contactImg} src={linkedin} alt="linkedin logo" width={30} height={30}/>
                </a>
                <br></br>
                <a className={styles.a} href="https://github.com/rauulssanchezz" target="_blank" title="Raúl-github">
                    <img className={styles.contactImg} src={github} alt="github logo" width={30} height={30}/>
                </a>
            </div>
        </footer>
    )
}