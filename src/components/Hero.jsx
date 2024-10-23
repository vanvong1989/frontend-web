import { BsFire } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"


const Hero = () => {
  return (
     <section id="home" className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[777px] w-full ">
      <div className="relative max-w-[666px] top-44 xs:top-72" >
        <h4 className="flex items-center gap-x-2 uppercase text-secondary medium-18">Modern collection <BsFire /> </h4>
        <h2 className="h1 capitalize">Grab Up to 20% Off On Selected Products</h2>
        <p className="border-l-4 border-secondary pl-3 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Pariatur ipsa neque atque sit eligendi sunt illum, repellat id, 
          asperiores ut voluptas</p>
          <div className="flex items-center gap-x-4 mt-2">
            <Link to={""} className="btn-secondary rounded-full flexCenter gap-x-2" >
            Latest Products
              <FaArrowRight />
            </Link>
          </div>
      </div>
     </section>
  )
}

export default Hero