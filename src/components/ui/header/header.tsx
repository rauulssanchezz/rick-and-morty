import styles from "./header.module.css";
import { useEffect, useState } from "react";
import headerIcon from "../../../assets/headericon.png";
import menu from "../../../assets/menu.png";
import back from "../../../assets/back.png";

export default function Header() {

    const windowTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const [theme, setTheme] = useState(windowTheme);
    const [menuOpen, setMenuOpen] = useState(false);

    const root = document.documentElement;
    
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        if (theme === "dark") {
            // Establecer el tema oscuro
            root.style.setProperty("--background", "#232137");
            root.style.setProperty("--foreground", "#0f3c80");
            root.style.setProperty("--color", "#318bbe");
            root.style.setProperty("--shadows", "#1c1b2d");
            root.style.setProperty("--button-background", "#113468");
          } else {
            // Establecer el tema claro
            root.style.setProperty("--background", "#80acbb");
            root.style.setProperty("--foreground", "#318bbe");
            root.style.setProperty("--color", "#0f3c80")
            root.style.setProperty("--shadows", "#4b6d78");
            root.style.setProperty("--button-background", "#4399cb");
          }
    }, [root.style, theme])

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("SelectValue: "+event.target.value);
        setTheme(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img className={styles.img} src={headerIcon}  alt="header icon"/>
            <a className={styles.h1} href="/"><h1 >Rick & Morty</h1></a>
            <img className={styles.menu} src={menu} onClick={handleMenu} alt="menu"/>
            <nav className={`${styles.nav} ${menuOpen ? styles.open: "right:0"}` }>
                <img className={styles.close} src={back} onClick={handleMenu} alt="menu"/>
                <ul className={styles.ul}>
                    <li><a href="/characters/CharactersList" className={styles.a}>Characters</a></li>
                    <li><a href="/locations/LocationsList" className={styles.a}>Locations</a></li>
                    <li><a href="/episodes/EpisodesList" className={styles.a}>Episode</a></li>
                </ul>
                <div className={styles.space}></div>
            </nav>
            
            <select id="theme" className={styles.select} value={theme} onChange={handleThemeChange}>
                <option value="" disabled hidden>Theme</option>
                <option value={"dark"}>Dark</option>
                <option value={"light"}>Light</option>
            </select>
        </header>
    );
}