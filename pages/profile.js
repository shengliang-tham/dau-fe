import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import CreatorPage from "./creator";
import Homepage from "./homepage";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}
