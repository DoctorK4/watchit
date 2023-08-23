import Link from "next/link";
import Container from "@/components/Container";
import styles from "./Header.module.css";
import Logo from "/public/logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/" style={{
          background: `url(${Logo.src}) no-repeat`,
          width: '150px',
        }} className={styles.a11yHidden}>
          WATCHIT
        </Link>
        <Link className={styles.setting} href="/setting">
          설정
        </Link>
      </Container>
    </header>
  );
}
