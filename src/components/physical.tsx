import { useState } from "react";

const physicalBlogs = [
  {
    datePosted: "22-05-2024",
    title: "Latest Post",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias delectus culpa quam ratione sint cupiditate amet facilis sequi deleniti? Optio minima odio dolores. Animi necessitatibus voluptatibus consequuntur minus cumque. Beatae fuga excepturi sunt animi ducimus doloremque id aliquid esse nostrum neque accusamus magni cum et officia blanditiis corrupti, necessitatibus ex quia nam ad enim aspernatur quidem. Expedita, ratione quos."
  },

  {
    datePosted: "21-05-2024",
    title: "Abc Post",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias delectus culpa quam ratione sint cupiditate amet facilis sequi deleniti? Optio minima odio dolores. Animi necessitatibus voluptatibus consequuntur minus cumque. Beatae fuga excepturi sunt animi ducimus doloremque id aliquid esse nostrum neque accusamus magni cum et officia blanditiis corrupti, necessitatibus ex quia nam ad enim aspernatur quidem. Expedita, ratione quos."
  },
  {
    datePosted: "20-05-2024",
    title: "XYZ Post",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias delectus culpa quam ratione sint cupiditate amet facilis sequi deleniti? Optio minima odio dolores. Animi necessitatibus voluptatibus consequuntur minus cumque. Beatae fuga excepturi sunt animi ducimus doloremque id aliquid esse nostrum neque accusamus magni cum et officia blanditiis corrupti, necessitatibus ex quia nam ad enim aspernatur quidem. Expedita, ratione quos."
  },
]


const Physical = () => {

  const [activeBlog, setActiveBlog] = useState(physicalBlogs[0]);

  return (
    <div className="text-[#f9fdff] p-8 items-center justify-center mt-2">
      <p className="text-4xl">
        <span className="text-[#ff4b57]">Physical Blogs</span>
        <div className="w-[210px] h-1.5 rounded mt-2 bg-[#ff4b57]"></div>
      </p>

      <div className="md:flex flex-row justify-between gap-8 mt-6">
        <div className="bg-[#2b2e41] w-[300px] h-[90vh] flex flex-col items-center">
           {physicalBlogs.map((blog, index)=> <div key={index}>
             <button onClick={()=> {setActiveBlog(physicalBlogs[index])}} className="border-2 rounded-lg my-2 border- px-7 py-2 border-white">{blog.datePosted}</button>
           </div>)}
        </div>
        <div className="bg-[#2b2e41] w-full  flex flex-col items-center">
            <div className="font-bold text-center mt-2">{activeBlog.title}</div>
            <div className="p-4">{activeBlog.description}</div>
            
        </div>
      </div>
    </div>
  );
};

export default Physical;
