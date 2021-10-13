import { Link } from "react-router-dom";

import Vision from "../components/Vision";
import ValueProp from "../components/ValueProp";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import SocialProof from "../components/SocialProof";
import Pilot from "../components/Pilot";
import Team from "../components/Team";
import Reports from "../components/Reports";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <Vision />
          <ValueProp />
          <Features />
          <HowItWorks />
          <Pilot />
          <SocialProof />
          <Reports />
          <Team />
          <GetInTouch />
          <Footer />
          <Link to="/impact-planner">Demo page</Link>
        </main>
      </div>
    </div>
  );
}
