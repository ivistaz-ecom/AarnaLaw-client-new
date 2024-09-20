//import Footer from '../Components/Home/Footer'
import Insights from "../Components/Home/Insights"
import Network from "../Components/Home//Network"
import NumbersSpeak from "../Components/Home/NumbersSpeak"
import OurCredentials from "../Components/Home/OurCredentials"
import OurLegacy from "../Components/Home/OurLegacy"
import Podcasts from "../Components/Home/Podcasts"
import WhatWeDo from "../Components/Home/WhatWeDo"
import HomeBanner from "../Components/Home/HomeBanner"
import Testimonials from "../Components/Home/Testimonials"
function Home() {
 

  return (
    <div className="">
      <HomeBanner />
      <Insights />
      <Podcasts />
      <WhatWeDo />
      <OurLegacy />
      <NumbersSpeak />
<Testimonials />
      <OurCredentials />
      <Network />
    </div>
  );
}

export default Home;
