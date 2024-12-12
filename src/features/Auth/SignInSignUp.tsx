// import { useEffect } from 'react';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
// import { useNavigate } from 'react-router-dom';
// import checkToken from '../../Fetch/func/CheckToken.js';
import { useAppSelector } from '@/hooks/useAppSelector.js';

function SignInSignUp() {
  const isSign = useAppSelector((state) => state.sign.isSign);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     checkToken(navigate, '/home');
  //   }, [navigate]);

  return (
    <div className="sign-into-container">
      <div className="sign-into-headers">
        <h3>{isSign === 'in' ? 'Sign in to' : 'Sign up to'}</h3>
        <p>restourant control system</p>
      </div>
      {isSign === 'in' ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default SignInSignUp;
