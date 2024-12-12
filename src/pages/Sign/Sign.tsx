import '@/styles/global/Sign.css';
import RightImages from '@/components/RightImages.js';
import SignInSignUp from './SignInSignUp.jsx';
import SvgCircle from '../../components/SvgCircle.jsx';
import { useAppSelector } from '@/hooks/useAppSelector';

function Sign() {
  const isSign = useAppSelector((state) => state.sign.isSign);
  console.log(isSign);

  return (
    <>
      <main>
        <div id="sign">
          {isSign === 'in' || isSign === 'up' ? (
            <SignInSignUp />
          ) : (
            isSign === 'reset' && <SvgCircle />
          )}
        </div>

        {isSign === 'reset' && <RightImages />}
      </main>
    </>
  );
}

export default Sign;
