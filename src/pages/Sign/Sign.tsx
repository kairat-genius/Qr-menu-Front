// import { useState } from 'react';
// import '@/styles/global/Sign.css';
// import RightImages from '../../components/Auth/RightImages.jsx';
// import SignInSignUp from './SignInSignUp.jsx';
// import SvgCircle from '../../components/SvgCircle.jsx';
import { useAppSelector } from '@/hooks/useAppSelector';

function Sign() {
  const isSign = useAppSelector((state) => state.sign.isSign);
  console.log(isSign);
  // const [signCheck, setSignCheck] = useState('in');
  // function handleSignCheck(signStatus: string): void {
  //   setSignCheck(value);
  // }

  // const slideCircleClass = 'up';

  return (
    <>
      {/* <main>
        <div id="sign">
          {(signCheck === 'in' && (
            <SignInSignUp page={signCheck} handleSignCheck={handleSignCheck} />
          )) ||
            (signCheck === 'up' && (
              <SignInSignUp
                page={signCheck}
                handleSignCheck={handleSignCheck}
              />
            )) ||
            (signCheck === 'reset' && (
              <SvgCircle page={signCheck} handleSignCheck={handleSignCheck} />
            ))}
        </div>

        {signCheck === 'reset' ? (
          <RightImages page={signCheck} svgClass={slideCircleClass} />
        ) : (
          <RightImages page={signCheck} />
        )}
      </main> */}
    </>
  );
}

export default Sign;
