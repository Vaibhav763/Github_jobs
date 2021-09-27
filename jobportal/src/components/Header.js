
import { GrGithub } from "react-icons/gr";
import {WiDaySunny ,WiMoonWaningCrescent3} from "react-icons/wi";

const Header = () => {
  
  // const chk = document.getElementById('chk');

  //   chk.addEventListener('change', () => {
  //     document.body.classList.toggle('dark');
  //   });
    return (
     <nav className='navbar'>
      <div className='navbar__main'>
        <h1 className="navname"> Job Portal </h1>
        <div className="icon">
          
          <a href="https://github.com/Vaibhav763/Github_jobs"  ><GrGithub /> </a>
          
         <a href="hgg">
          <input type="checkbox" class="checkbox" id="chk" />
          <label class="label " for="chk">
          <div class="ball"></div>
          </label>
          </a>
       
        </div>
        </div>
      </nav>
     
    )
}

export default Header;