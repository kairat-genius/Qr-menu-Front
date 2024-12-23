import './Auth.css';
import RightImages from '@/components/Auth/RightImages.js';
import SignInSignUp from '@/components/Auth/SignInSignUp.js';
import SvgCircle from '@/components/Auth/SvgCircle';
import { useAppSelector } from '@/hooks/useAppSelector';

const Auth: React.FC = () => {
  const isSign = useAppSelector((state) => state.auth.isSign);
  console.log(isSign);

  return (
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
  );
};

export default Auth;
