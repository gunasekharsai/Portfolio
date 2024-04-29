import { Link } from "react-router-dom"

export const Info = ()=>{
    return (
    <div className="bg-slate-300 h-screen">
          <div className="flex justify-center text-2xl  py-10 mx-20 px-20">
    Hello, I'm Guna Sekhar Sai, a third-year undergraduate student from the Civil Engineering department. I'm very passionate about building websites and working with web development.
    </div>
  <div className="flex justify-center">
  <div className="flex flex-col w-50 m-10 ">
    <Link to= "/academics" className="flex justify-center p-5 text-xl bg-neutral-900 text-white my-4 rounded-lg">
       Academics
    </Link>
    <Link to= "/projects"  className="flex justify-center  p-5 text-xl bg-neutral-900 text-white my-4 rounded-lg">
      Projects
    </Link>
    <Link to= "/extracurricularactivities"  className=" p-5 text-xl bg-neutral-900 text-white my-4 rounded-lg">
      extracurricular activities
    </Link>
    
    </div>
  </div>
  </div>
    )
}