import styles from "./Header.module.css";

//Images
import logoSvg from "../../assets/logo.svg";
import { InputSearch } from "../InputSeach";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logotipo todo" />

      <InputSearch />
    </header>
  )
}
