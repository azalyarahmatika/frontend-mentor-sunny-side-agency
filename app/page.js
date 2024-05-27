import Image from "next/image";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Header />
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  );
}
