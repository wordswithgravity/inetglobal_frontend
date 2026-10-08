import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CoreServices from "../components/CoreServices";
import BusinessSolutions from "../components/BusinessSolutions";
import IndustryExpertise from "../components/IndustryExpertise";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero / Header Section */}
      <Header />

      {/* Core Services Section */}
      <CoreServices />

      {/* Business Solutions Section */}
      <BusinessSolutions />

      {/* Industry Expertise Section */}
      <main className="flex-1">
        <IndustryExpertise />
      </main>
    </div>
  );
};

export default Home;
