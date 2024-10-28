import First from "../components/landing/FirstSection";
import Second from "../components/landing/SecondSection";
import Third from "../components/landing/ThirdSection";
import Fourth from "../components/landing/FourthSection";
import Fifth from "../components/landing/FifthSection";
import Footer from "../components/landing/FooterSection";
import NavBar from "@/components/NavBar/NavBar";

export default function landing() {
  return (
    <main>
      <NavBar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </main>
  );
}
