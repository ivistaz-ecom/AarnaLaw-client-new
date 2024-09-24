import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aviation from "./Industries/Aviation";
import AutomotiveIndustryImg from "../images/Automotive-Industry-banner.jpg";
import IndustryList from "./Industries/IndustryList";

function AutomotiveIndustry() {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const navigate = useNavigate();

    const selectIndustry = (industry) => {
        setSelectedIndustry(industry);
        if (industry === "Aviation") {
            navigate("/aviation");
        }
    };

    return (
        <div className="mx-20">
            <section>
                <div className="text-center font-extrabold text-3xl">
                    <img src={AutomotiveIndustryImg} className="w-100 h-100 mx-auto rounded-md" alt="Automotive Industry" />
                </div>
            </section>

            <div className="bg-white-200 p-8">
                <div className="flex items-center justify-center gap-8">
                    <IndustryList selectIndustry={selectIndustry} selectedIndustry={selectedIndustry} />
                </div>
            </div>

            {/* Render selected industry component */}
            {selectedIndustry === "Aviation" && <Aviation />}
            
            <div className="grid grid-cols-4 gap-4 mt-8">
                <div className="col-span-1"></div>
                <div className="col-span-2">
                    <p className="text-lg font-inter font-medium">
                     The automobile industry is by far the largest transport sector in the world, powering transport for billions of people every single day. From the industry’s market size at $2.75 trillion in 2020, it’s expected to grow to a massive $3.8 trillion by 2030. In India alone, the automotive market is worth $118 billion. The Indian automobile market is rather unique, with two-wheelers accounting for 80% of the market, with only 13% comprising passenger cars. Analysts believe that by 2026, the Indian market is expected to reach $300 billion.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                        The evolution of motor vehicles is not only a display of how far our engineering capabilities have come, but a testament to the very human instinct to stay connected and on the move.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                        Aarna Law has built a considerable legal presence in this industry as an automotive law firm. We have served as legal counsel for several large multinational corporations in the automotive space, extending our legal expertise in matters ranging from drafting agreements, advising them on technical legal queries to representing them before several forums.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                        Some specific work our automotive lawyers have undertaken is listed hereunder-
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-custom-red rounded-full mr-2"></span>
                    Conducted extensive due diligence for companies on pending litigation, regulatory compliance of entities that were to be engaged as Official Dealers. We have also advised auto component manufacturers on production of Spare Parts and allied services.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-custom-red rounded-full mr-2"></span>
                        Drafting and Vetting of Agreements including Share-Holder Agreements, Licensing Agreements, Dealership Agreements, and Technology Transfer Agreements.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-custom-red rounded-full mr-2"></span>
                        Drafted progressive Data Privacy Agreements for large corporations keeping in mind Global Regulatory Requirements as well as the Indian Data Privacy Law and upcoming Regulations.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-custom-red rounded-full mr-2"></span>
                        Represented Automotive Companies in Consumer Disputes before the National Consumer Dispute Redressal Commission and State as well as District Level Commissions.
                    </p>
                    <br></br>
                    <p className="text-lg font-inter font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-custom-red rounded-full mr-2"></span>
                        Represented Automotive Companies and component manufacturers in disputes before several Courts.
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
}

export default AutomotiveIndustry;
