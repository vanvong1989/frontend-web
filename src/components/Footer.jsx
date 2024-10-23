import { Link } from "react-router-dom"
import SocialIcons from "./SocialIcons"

const Footer = () => {


  return (
    <section id="contact" className="bg-tertiary max-padd-container text-white py-12 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to={'/'} className="bold-24 mb-4">
           <h3>Alison <span className="text-secondary">Mart</span></h3>
          </Link>
          <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Error reiciendis neque dolore totam libero dignissimos quos minima, 
            corrupti quisquam velit recusandae aut reprehenderit nam! Ipsam dolor
             necessitatibus doloremque consequuntur dignissimos.</p>
        </div>
         <div className="flex flex-col items-center  xl:items-center">
          <h4 className="bold-20 mb-4">Quick Links </h4>
            <ul className="space-y-2 regular-15 text-gray-30">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="" className="hover:text-secondary">Categories</a></li>
              <li><a href="" className="hover:text-secondary">Shop</a></li>
              <li><a href="" className="hover:text-secondary">Contact Us</a></li>
            </ul>
         </div>
         <div className="flex flex-col  items-center md:items-start">
          <h4 className="text-lg mb-4">Contact Us</h4>
          <p>Email: <a href="" className="hover:text-secondary">vanvong1989@gmail.com</a></p>
          <p>Phone: <a href="" className="hover:text-secondary">09731.....</a></p>
          <p>Addres: Vinh university - Nghe An province, Vietnam.</p>
         </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <SocialIcons />
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} AlisonMart | All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer