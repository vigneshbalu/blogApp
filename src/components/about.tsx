import { Link } from "react-router-dom";
import OrganicChemistry from "../assets/icons8-organic-chemistry-64.png";
import Inorganic from "../assets/Inorganic.jpg";

const About = () => {
  return (
    <div className="bg-[#212437] text-[#f9fdff] p-8 items-center justify-center mt-2">
      <p className="text-4xl">
        <span className="text-[#ff4b57]">MY BLOG</span>
        <div className="w-[150px] h-1.5 rounded mt-2 bg-[#ff4b57]"></div>
      </p>

      <div className="md:flex flex-row justify-between gap-8 mt-2">
        <div className="w-full rounded bg-[#2b2e41] p-8 font-normal mt-2">
          <img
            src={OrganicChemistry}
            alt="OrganicChemistry"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">
            Organic Chemistry <br />
          </div>
          <p className="text-sm mt-2 text-left">
            Organic chemistry focuses on the study of carbon-containing
            compounds, exploring their structures, properties, and reactions. It
            plays a crucial role in understanding life processes, synthesizing
            new materials, and advancing technologies. The field encompasses
            various sub-disciplines, including organic synthesis, spectroscopy,
            and biochemistry, driving innovation in science and industry.
          </p>
          <div className="md:flex w-full flex justify-center items-center underline mt-4">
            <Link to={'/organics'}>
             Click here
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex flex-row justify-between gap-8 mt-2">
        <div className="w-full rounded bg-[#2b2e41] p-8 font-normal mt-2">
          <img
            src={Inorganic}
            alt="Inorganic"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">In-Organic Chemistry</div>
          <p className="text-sm mt-2 text-left">
            Inorganic chemistry examines compounds that do not contain
            carbon-hydrogen (C-H) bonds, studying elements and their properties,
            structures, and reactions. It plays a vital role in materials
            science, catalysis, and environmental science, exploring the
            behavior of metals, minerals, and other non-carbon-based substances.
            The field bridges fundamental research with practical applications,
            contributing to advancements in technology, medicine, and
            sustainability.
          </p>
          <div className="md:flex w-full flex justify-center items-center underline mt-4">
            <Link to={'/inorganics'}>
             Click here
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex flex-row justify-between gap-8 mt-2">
        <div className="w-full rounded bg-[#2b2e41] p-8 font-normal mt-2">
          <img
            src={Inorganic}
            alt="Inorganic"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Physical Chemistry</div>
          <p className="text-sm mt-2 text-left">
            Physical chemistry investigates the principles governing the
            behavior of matter at the molecular and atomic levels, combining
            principles of physics and chemistry. It explores topics like
            thermodynamics, quantum mechanics, and kinetics to understand
            chemical systems' properties and reactions. This discipline plays a
            pivotal role in fields like materials science, chemical engineering,
            and biochemistry, offering insights into molecular interactions and
            enabling the development of new technologies and processes.
          </p>
          <div className="md:flex w-full flex justify-center items-center underline mt-4">
            <Link to={'/physical'}>
             Click here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
