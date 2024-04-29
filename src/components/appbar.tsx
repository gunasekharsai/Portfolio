import { Link } from "react-router-dom"

export const Appbar = ()=>{
    return   <div  className="flex justify-between py-5  text-2xl text-white	bg-neutral-900">
    <div className="mx-4">
        <Link to= "/">   PERSONAL PORTFOLIO</Link>
     
    </div>
    <div className="mx-4">
        <Link to= "/About"> About</Link>
    </div>
  </div>
}