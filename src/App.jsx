import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Plans from "./components/Plans";
import VideoSection from "./components/VideoSection";
import URAFeature from "./components/URAFeature";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq"; // ✅ NOVO FAQ
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Partners />
      <VideoSection />
      <Testimonials />
      <Advantages />
      <Plans />
      <URAFeature />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;