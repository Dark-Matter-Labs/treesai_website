import Vision from "./components/Vision";
import ValueProp from "./components/ValueProp";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import Team from "./components/Team";
import Reports from "./components/Reports";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

import "./App.css";

export default function TreesAIWebsite() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <Vision />
          <ValueProp />
          <Features />
          <SocialProof />
          <Team />
          <Reports />
          <GetInTouch />
        </main>
        <Footer />
      </div>
    </div>
  );
}
