import { useState } from "react";
import Domsreaction from "../assets/DomsReaction.jpg";
import DowsReaction from "../assets/Dowsreaction.png"

const organicBlogs = [
  {
    datePosted: "22-05-2024",
    title: "Dow's Process",
    description:
      "The Dow process is a method used to extract magnesium from seawater. First, seawater is evaporated to concentrate the magnesium chloride it contains. Then, the concentrated solution is treated with lime (calcium oxide), which reacts with magnesium chloride to form magnesium hydroxide. Finally, the magnesium hydroxide is heated to produce magnesium oxide, which is then processed further to obtain pure magnesium metal. Example: Imagine you have a glass of seawater. You want to get magnesium from it. First, you heat the seawater to make some of the water evaporate, leaving behind more concentrated seawater with magnesium chloride. Then, you mix this concentrated seawater with something called lime, like when you mix lemon and water. Lime reacts with the magnesium chloride, forming a new substance called magnesium hydroxide, which looks like a white powder. Lastly, you heat this powder to make magnesium oxide, which is what you need for making pure magnesium metal.",
    images: Domsreaction,
  },

  {
    datePosted: "21-05-2024",
    title: "Cannizzaro Reaction",
    description:
      "The Cannizzaro reaction is a chemical reaction where an aldehyde molecule reacts with itself in the presence of a strong base to produce a corresponding alcohol and a carboxylic acid. For example, when benzaldehyde reacts with a strong base like sodium hydroxide, it forms benzyl alcohol and sodium benzoate. This reaction is important in organic chemistry for producing both alcohol and carboxylic acid products from aldehydes.",
    images: DowsReaction,
  },
  {
    datePosted: "20-05-2024",
    title: "Reimer-tiemann Reaction",
    description:
      "The Reimer-Tiemann reaction is a chemical reaction where a phenol reacts with chloroform in the presence of a strong base, typically a hydroxide, to produce a salicylaldehyde compound. For example, when phenol reacts with chloroform in the presence of sodium hydroxide, it forms salicylaldehyde. This reaction is important in organic chemistry for synthesizing salicylaldehyde, which is used in various applications including fragrances and pharmaceuticals.",
    images: Domsreaction,
  },
];

const Organic = () => {
  const [activeBlog, setActiveBlog] = useState(organicBlogs[0]);

  return (
    <div className="text-[#f9fdff] p-8 items-center justify-center mt-2">
      <p className="text-4xl">
        <span className="text-[#ff4b57]">Organic Blogs</span>
        <div className="w-[210px] h-1.5 rounded mt-2 bg-[#ff4b57]"></div>
      </p>

      <div className="md:flex flex-row justify-between gap-8 mt-6">
        <div className="bg-[#2b2e41] w-[300px] h-[90vh] flex flex-col items-center">
          {organicBlogs.map((blog, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setActiveBlog(organicBlogs[index]);
                }}
                className="border-2 rounded-lg my-2 border- px-7 py-2 border-white"
              >
                {blog.datePosted}
              </button>
            </div>
          ))}
        </div>
        <div className="bg-[#2b2e41] w-full  flex flex-col items-center">
          <div className="font-bold text-center mt-2">{activeBlog.title}</div>
          <div className="p-4">{activeBlog.description}</div>
          <img className= "w-[500px] h-[55vh]" src={activeBlog.images} alt="Dow's Process" />
        </div>
      </div>
    </div>
  );
};

export default Organic;
