import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import {Logo} from '../components/index'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          job<span>tracking</span> app
        </h1>
        <p>
          I baby shaman wolf blue bottle banjo, lo-fi blog big mood art party tacos.
          Marfa plaid photo booth solarpunk chia palo santo distillery microdosing cloud bread DSA biodiesel prism. 
          Fingerstache normcore marfa, yes plz ramps twee JOMO organic lyft small batch mumblecore humblebrag pug leggings. 
          Enamel pin disrupt 90s, jean shorts prism readymade bespoke hella. 
          Artisan deep v lumbersexual authentic snackwave fingerstache venmo whatever 
          knausgaard offal pabst shoreditch VHS quinoa health goth.
        </p>
        <Link to='/register' className='btn register-link'>
          Register
        </Link>
        <Link to='/login' className='btn'>
          Login/Demo User
        </Link>
      </div>
      <img src={main} alt='job hunt' className='img main-img'/>
    </div>
  </Wrapper>
  );
};





export default Landing