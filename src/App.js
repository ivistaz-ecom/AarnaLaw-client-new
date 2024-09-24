import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import SubscribeNewsletter from "./Components/SubscribeNewsletter";

import Home from "./Components/Home";
import AboutUs from "./Components/Aboutus/aboutus";
import PracticeArea from "./Components/PracticeArea";
import Industries from "./Components/Industries";
import Contactus from "./Components/Contactus";
import ApplyNow from "./Components/ApplyNow";
import Careers from "./Components/Careers";

import UserSignIn from "./Components/SignIn";
import SignUp from "./Components/Signup";
import SignOut from "./Components/SignOut";
import ForgotPassword from "./Components/ResetPassword";

import SearchWidget from "./Components/SearchWidget";
import UploadPdf from "./Components/uploadpdf";

import Automotiveindustry from "./Components/Industries/AutomobileIndustry";
import Footer from "./Components/Footer";
import Aviation from "./Components/Industries/Aviation";
import Financialservices from "./Components/Industries/BankfinInson";
import Construction from "./Components/Industries/Construction";
import CorporateLaw from "./Components/Industries/CorporateLaw";
import Taxation from "./Components/Industries/Taxation";
import EnvironmentalLaw from "./Components/Industries/EnvironmentalLaw";
import EnergyOilGas from "./Components/Industries/EnergyOilGas";

import ForeignInvestment from "./Components/Industries/ForeignInvestment";
import Healthcare from "./Components/Industries/Healthcare";
import ITIoTBlockchain from "./Components/Industries/ITIoTBlockchain";

import MediaTelecommunications from "./Components/Industries/MediaTelecommunications";
import LifeSciencePharmaceuticals from "./Components/Industries/LifeSciencePharmaceuticals";
import Retail from "./Components/Industries/Retail";
import ShippingMaritime from "./Components/Industries/ShippingMaritime";
import SpaceLaw from "./Components/Industries/SpaceLaw";
import SportsLaw from "./Components/Industries/SportsLaw";

import ArtLaw from "./Components/practice-area/ArtLaw";
import BankruptcyIns from "./Components/practice-area/BankruptcyIns";
import CorporateAdvisory from "./Components/practice-area/CorporateAdvisory";
import ArbitrationsMediation from "./Components/practice-area/ArbitrationsMediation";
import Fraud from "./Components/practice-area/Fraud";
import Ipr from "./Components/practice-area/Ipr";
import InternationalDisputes from "./Components/practice-area/InternationalDisputes";
import Lowbono from "./Components/practice-area/Lowbono";
import PrivateClients from "./Components/practice-area/PrivateClients";
import RealEstate from "./Components/practice-area/RealEstate";
import TrialLitigation from "./Components/practice-area/TrialLitigation";
import RiskManagement from "./Components/practice-area/RiskManagement";
import { LanguageProvider } from "./Components/LanguageContext";
import Shreyasjayasimha from "./Components/Team/Shreyasjayasimha";
import Kamalanaganand from "./Components/Team/Kamalanaganand";
import Manjushree from "./Components/Team/Manjushree";
import ApoorvaGuruprasad from "./Components/Team/ApoorvaGuruprasad";
import Spandanasshwath from "./Components/Team/Spandanasshwath";
import Punthishah from "./Components/Team/Punthishah";
import Insights from "./Components/NewsInsights/Insights";
import AarnaNews from "./Components/NewsInsights/AarnaNews";
import Publications from "./Components/NewsInsights/Publications";
import Podcast from "./Components/NewsInsights/Podcast";
import Insitespage from "./Components/NewsInsights/Insightspage";
import PageNotFound from "./Components/PageNotFound";
import Posts from "./app/aarna-news/[slug]/Posts";
const App = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/userSignIn" element={<UserSignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searchWidget" element={<SearchWidget />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/practice-area" element={<PracticeArea />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/practice-area/art-law" element={<ArtLaw />} />
          <Route
            path="/practice-area/bankruptcy-ins"
            element={<BankruptcyIns />}
          />
          <Route
            path="/practice-area/corporate-advisory"
            element={<CorporateAdvisory />}
          />
          <Route
            path="/practice-area/arbitrations-mediation"
            element={<ArbitrationsMediation />}
          />
          <Route path="/practice-area/fraud" element={<Fraud />} />
          <Route path="/practice-area/ipr" element={<Ipr />} />
          <Route
            path="/practice-area/international-disputes"
            element={<InternationalDisputes />}
          />
          <Route path="/practice-area/lowbono" element={<Lowbono />} />
          <Route
            path="/practice-area/private-clients"
            element={<PrivateClients />}
          />
          <Route path="/practice-area/real-estate" element={<RealEstate />} />
          <Route
            path="/practice-area/risk-management"
            element={<RiskManagement />}
          />
          <Route
            path="/practice-area/trial-litigation"
            element={<TrialLitigation />}
          />
          <Route
            path="/team/shreyas-jayasimha/"
            element={<Shreyasjayasimha />}
          />
          <Route path="/team/kamala-naganand" element={<Kamalanaganand />} />
          <Route path="/team/manjushree" element={<Manjushree />} />
          <Route
            path="/team/apoorva-guruprasad"
            element={<ApoorvaGuruprasad />}
          />
          <Route path="/team/spandan-asshwath" element={<Spandanasshwath />} />
          <Route path="/team/punthi-shah" element={<Punthishah />} />

          <Route
            path="/industries/automotive-industry"
            element={<Automotiveindustry />}
          />
          <Route path="/industries/aviation" element={<Aviation />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/corporate-law" element={<CorporateLaw />} />
          <Route
            path="/industries/environmental-law"
            element={<EnvironmentalLaw />}
          />
          <Route path="/industries/taxation" element={<Taxation />} />
          <Route path="/industries/energy-oil-gas" element={<EnergyOilGas />} />
          <Route
            path="/industries/Financialservices"
            element={<Financialservices />}
          />
          <Route
            path="/industries/foreign-investment"
            element={<ForeignInvestment />}
          />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route
            path="/industries/it-iot-blockchain"
            element={<ITIoTBlockchain />}
          />
          <Route
            path="/industries/media-telecommunications"
            element={<MediaTelecommunications />}
          />
          <Route
            path="/industries/life-science-pharmaceuticals"
            element={<LifeSciencePharmaceuticals />}
          />
          <Route
            path="/industries/shipping-maritime"
            element={<ShippingMaritime />}
          />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/space-law" element={<SpaceLaw />} />
          <Route path="/industries/sports-law" element={<SportsLaw />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Insitespage />} />

          <Route path="/aarna-news" element={<AarnaNews />} />
          <Route path="/aarna-news/:slug" element={<Posts />} />
          
          <Route path="/publications" element={<Publications />} />
          <Route path="/podcast" element={<Podcast />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/apply-now" element={<ApplyNow />} />


          
          <Route path="/upload-pdf" element={<UploadPdf />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </LanguageProvider>
      <Footer />
    </div>
  );
};

export default App;
