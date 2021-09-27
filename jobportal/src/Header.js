
import { GrGithub } from "react-icons/gr";

const Header = () => {
    
    return (
     <nav className='navbar'>
      <div className='navbar__main'>
        <h1 className="navname"> Job Portal </h1>
        <div className="icon">
          <a href="https://github.com/Vaibhav763/Github_jobs" target="_blank" ><GrGithub /> </a>
        </div>
        </div>
      </nav>
     
    )
}

export default Header;