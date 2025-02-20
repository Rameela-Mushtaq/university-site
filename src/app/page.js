import Campus from "@/components/home/Campus";
import Cources from "@/components/home/Cources";
import Development from "@/components/home/Development";
import Discovering from "@/components/home/Discovering";
import Excellence from "@/components/home/Excellence";
import Facility from "@/components/home/Facility";
import Faq from "@/components/home/Faq";
import Focus from "@/components/home/Focus";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Recruiters from "@/components/home/Recruiters";
import Story from "@/components/home/Story";
import WhyUs from "@/components/home/WhyUs";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cources />
      <Development />
      <WhyUs />
      <Facility />
      <Excellence />
      <Campus />
      <Story />
      <Recruiters />
      <Discovering />
      <Focus />
      <Faq />
      <Footer />
    </div>
  );
}
