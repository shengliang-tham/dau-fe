import styles from "../styles/Home.module.css";
import CreatorPage from "./creator";
import Homepage from "./homepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage />
      {/* <CreatorPage /> */}
    </div>
  );
}
