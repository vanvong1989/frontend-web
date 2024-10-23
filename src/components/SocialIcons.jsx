import { RiDribbbleFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"
import { Link } from "react-router-dom"


const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4">
      <Link to={''} className="text-[#08d9d6] hover:-translate-y-1 transition-all duration-500"><RiYoutubeFill></RiYoutubeFill></Link>
      <Link to={''} className="text-[#f08a5d] hover:-translate-y-1 transition-all duration-500"><RiInstagramFill></RiInstagramFill></Link>
      <Link to={''} className="text-[#ff2e64] hover:-translate-y-1 transition-all duration-500"><RiTwitterFill></RiTwitterFill></Link>
      <Link to={''} className="text-[#eaeaea] hover:-translate-y-1 transition-all duration-500"><RiLinkedinFill></RiLinkedinFill></Link>
      <Link to={''} className="text-[#f9ed69] hover:-translate-y-1 transition-all duration-500"><RiDribbbleFill></RiDribbbleFill></Link>
      <Link to={''} className="text-[#5272f2] hover:-translate-y-1 transition-all duration-500"><RiGithubFill></RiGithubFill></Link>
    </div>
  )
}

export default SocialIcons
