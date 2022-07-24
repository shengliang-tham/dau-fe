import Hero from "../components/Hero";
import Instructor from "../components/Instructor";
import Navbar from "../components/Navbar";
import Video from "../components/Video";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Instructor />
    </div>
  );
}
