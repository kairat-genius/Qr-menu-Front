import './Sign.css';
import RightImages from '@/features/Auth/RightImages.js';
import SignInSignUp from '@/features/Auth/SignInSignUp.js';
import SvgCircle from '@/features/Auth/SvgCircle';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

const Sign = () => {
  const isSign = useAppSelector((state) => state.auth.isSign);
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
};

export default Sign;
