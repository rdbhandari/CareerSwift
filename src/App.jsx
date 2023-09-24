import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Openings from "./components/Openings";
import PerksBenifits from "./components/PerksBenifits";
import Workplace from "./components/Workplace";

export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <Hero/>
        <PerksBenifits/>
        <Openings/>
        <Workplace/>
        <ContactUs/>
      </div>
      
    </>
  )
}