import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo}  from '../components'
import { FormRow } from '../components'
const Register = () => {
  return (
   <Wrapper>
    <form className="form">
      <Logo />
      <h4>Register</h4>
      <FormRow type='text' name='name' defaultValue='kishan' />
      <FormRow type='text' name='lastName' labelText='last name' defaultValue='bisht' />
      <FormRow type='text' name='location' defaultValue='earth' />
      <FormRow type='email' name='email' defaultValue='kishan@gmail.com' />
      <FormRow type='password' name='password' defaultValue='1234' />
      <button type='submit' className="btn btn-block">
        submit
      </button>
      <p>
        Already a member?
        <Link to='/login' className="member-btn">
          Login
        </Link>
      </p>
    </form>
   </Wrapper> 
  )
  
}

export default Register