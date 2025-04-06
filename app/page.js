import Navbar from "@/components/navbar";
import Hehe from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hehe />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
