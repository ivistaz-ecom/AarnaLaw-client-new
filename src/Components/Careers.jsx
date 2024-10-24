import React, { useState } from "react";
import CareersImg from "../images/careers-banner.jpg";
import CareersmobImg from "../images/careers-mobile-banner.jpg";
import ApplyNow from "./ApplyNow";
import InternApply from "./InternApply"; // Import the Apply Now Form component
const Careers = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailsVisibleReq, setDetailsVisibleReq] = useState(false);
  const [showApplyNowForm, setShowApplyNowForm] = useState(false); // State for showing/hiding the contact form
  const [showApplyNowInternForm, setShowApplyNowInternForm] = useState(false); // State for showing/hiding the contact form

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleApplyNowClick = () => {
    setShowApplyNowForm(true);
  };

  const handleApplyNowInternClick = () => {
    setShowApplyNowInternForm(true);
  };

  const toggleDetailsReq = () => {
    setDetailsVisibleReq(!detailsVisibleReq);
  };

  const handleCloseApplyNowForm = () => {
    setShowApplyNowForm(false);
  };

  const handleCloseApplyNowInternForm = () => {
    setShowApplyNowInternForm(false);
  };

  return (
    <div>
      <section className="text-center font-extrabold text-3xl">
        {/* Desktop View */}
        <div className="hidden md:flex justify-center">
          <img src={CareersImg} className="w-full h-[500px]" alt="aboutus" />
          <div className="absolute inset-x-0 md:mt-56 text-white text-5xl font-bold text-center">
            <p>Careers</p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden justify-center">
          <img src={CareersmobImg} className="w-full" alt="aboutus" />
          <div className="absolute inset-x-0 mt-56 text-white text-5xl font-bold text-center">
            <p>Careers</p>
          </div>
        </div>
      </section>

      <div className="md:grid md:grid-cols-7 gap-4 mt-8 px-4">
        <div className="col-span-1"></div>
        <div className="col-span-5">
          <div className="bg-white-400">
            <ul>
              <li className="text-center font-medium tracking-wider text-gray-900 mb-4 font-montserrat text-sm">
                CAREERS AT AARNA LAW
              </li>
              <li className="text-center text-3xl font-medium text-blue">
                Be a part of a dynamic law practice with an
              </li>
              <li className="text-center text-3xl font-medium text-blue">
                international outlook
              </li>
            </ul>
          </div>

          {/* What we do Section */}
          <div className="mt-8 text-base leading-relaxed md:text-justify text-gray-700 font-inter">
            <ul>
              <li>
                Aarna Law is an India-based international legal advisory rooted
                in dharmic principles of natural law, justice, and compassion.
                Through our wide range of practice areas, we provide progressive
                legal counsel to a clientele that spans Nation States,
                International Organisations, Multinational Companies, Niche
                Start-ups, and Individual Interests.
              </li>
              <br />
              <li>RECRUITMENT FOR LEGAL AND ADMINISTRATIVE PROFESSIONALS</li>
              <br />
              <li>
                We are always interested to hear from professionals with
                international experience, significant academic achievements,
                publications in peer-reviewed journals, or other demonstrations
                of astute legal skills. We are also interested in innovative and
                competent admin and support team members. If you are a team
                player with a spirit of service and a passion for excellence in
                the law, please get in touch.
              </li>
            </ul>

            <br />

            {/* Current Openings */}
            <ul>
              <li className="flex items-center justify-between text-3xl">
                Current Openings
              </li>
              <li className="border-b-2 border-custom-red mt-1 mb-4"></li>
              {/* Reduced margin between title and line */}

              {/* First Job Listing */}
              <li className="flex items-center justify-between text-lg font-bold gap-4 py-2">
                <div className="flex-1">
                  Litigation - 5 to 9 years - Bangalore
                </div>
                <button
                  className="focus:outline-none ml-auto md:ml-0"
                  onClick={toggleDetails}
                >
                  <span
                    className={`font-bold text-x4 ${
                      detailsVisible ? "text-custom-red" : "text-custom-red"
                    }`}
                  >
                    {detailsVisible ? "−" : "+"}
                  </span>
                </button>
              </li>
              {detailsVisible && (
                <li>
                  <div>Experience: 5 years to 9 years</div>
                  <div>Location: Bangalore</div>
                  <div>
                    Domain expertise: Arbitration and general Litigation, i.e.
                    Tribunal, Trial and Appellate Court experience
                  </div>
                  <div>Education: LLB and higher</div>
                  <div>Notice Period: Immediate to 15 days</div>
                  <div>Should be fluent in Kannada language</div>
                  <br />
                  <div>Should Have:</div>
                  <div>
                    Good Communication, should be organized, work under pressure
                    and should have attention to details
                  </div>
                </li>
              )}

              {/* Second Job Listing */}
              <li className="flex items-center justify-between text-lg font-bold gap-4 py-2">
                <div className="flex-1">
                  Corporate Advisory - 5 to 8 years - Bangalore
                </div>
                <button
                  className="focus:outline-none ml-auto md:ml-0"
                  onClick={toggleDetailsReq}
                >
                  <span
                    className={`font-bold text-x4 ${
                      detailsVisibleReq ? "text-custom-red" : "text-custom-red"
                    }`}
                  >
                    {detailsVisibleReq ? "−" : "+"}
                  </span>
                </button>
              </li>
              {detailsVisibleReq && (
                <li>
                  <div>Experience: 5 to 8 years</div>
                  <div>Location: Bangalore</div>
                  <div>
                    Domain expertise: Arbitration and general Litigation, i.e.
                    Tribunal, Trial and Appellate Court experience
                  </div>
                  <div>Education: LLB and higher</div>
                  <div>Notice Period: Immediate to 15 days</div>
                  <br />
                  <div>Responsibilities:</div>
                  <ul className="list-disc ml-5">
                    <li className="text-lg font-inter font-medium pl-5">
                      Drafting and reviewing contracts, trust deeds, wills,
                      resolutions, power-of-attorney and other legal documents
                    </li>
                    <li className="text-lg font-inter font-medium pl-5">
                      Advising on issues in relation to corporate and commercial
                      laws
                    </li>
                    <li className="text-lg font-inter font-medium pl-5">
                      Advising start-ups on incorporation/winding-up
                    </li>
                    <li className="text-lg font-inter font-medium pl-5">
                      Conducting legal due diligence
                    </li>
                  </ul>
                  <br />
                  <div>Should Have:</div>
                  <div>
                    Good Communication, should be organized, work under pressure
                    and should have attention to details
                  </div>
                </li>
              )}
            </ul>

            <br />
            <div className="flex justify-start items-center">
              <button
                onClick={handleApplyNowClick}
                className="bg-white text-black border-2 border-custom-red px-6 py-2 rounded-md font-semibold hover:bg-custom-red hover:text-white"
              >
                Apply Now
              </button>
            </div>
            <br />
            {/* Internships Section */}
            <ul>
              <li className="text-3xl">Internships</li>
              <li className="border-b-2 border-custom-red mt-1 mb-4"></li>{" "}
              {/* Reduced margin between title and line */}
              <li className="text-2xl">Internship</li>
              <br />
              <li>
                At Aarna, we offer an internship experience that is enriching
                and challenging. We look for more than a strong academic record;
                we seek individuals who are motivated, eager to learn, and share
                the same values as the firm. We pride ourselves in the diversity
                of interns and the opportunities we’ve offered to students from
                all over the country.
              </li>
              <li>
                The internship period is 4-8 weeks. Interns have the opportunity
                to work with our disputes, insolvency law as well as our
                corporate advisory teams. During the internship period, the
                intern has a unique opportunity to get a practical insight into
                various aspects of our practice areas. Each intern is assigned a
                supervisor; however, they are expected to work with all teams in
                order to get a holistic experience.
              </li>
              <li>
                Our interns are expected to be aware of recent developments in
                the law in our practice areas. Each intern is assigned a topic
                to research on and at the end of the term, the intern is
                expected to make a presentation before the partners and all
                associates.
              </li>
              <li>
                We do not accept internship applications from students who are
                in the first and second year of the BA LLB (Hons.) programme and
                the 3 year LLB programme.
              </li>
            </ul>
            <br />
            <div className="flex justify-start items-center">
              <button
                onClick={handleApplyNowInternClick}
                className="bg-white text-black border-2 border-custom-red px-6 py-2 rounded-md font-semibold hover:bg-custom-red hover:text-white"
              >
                Apply Now
              </button>
            </div>
          </div>
          <br></br>
        </div>
      </div>
      {showApplyNowForm && <ApplyNow handleClose={handleCloseApplyNowForm} />}
      {showApplyNowInternForm && (
        <InternApply handleClose={handleCloseApplyNowInternForm} />
      )}
    </div>
  );
};

export default Careers;
