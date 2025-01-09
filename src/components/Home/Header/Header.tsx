import { Link } from 'react-router-dom';
import Logo from '~/logo.svg';
import Button from '@/components/UI/Button';

const Header: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <img src={Logo} className="w-[144px] h-[94px]" />
      <div className="flex items-end justify-end gap-[182px]">
        <div className="flex justify-between w-[88px] h-[44px]">
          <button className="font-raleway text-lg border rounded-full p-2">
            EN
          </button>
          <button className="font-raleway">UA</button>
        </div>
        <Link to="login">
          <Button
            className="flex items-center justify-center w-[144px] h-[44px] rounded-[10px] p-[2px] bg-gradient-to-t from-[#15C5CE] to-[#0C677C] "
            onClick={() => console.log('Login')}
          >
            <span className="flex items-center justify-center w-full h-full px-[32px] py-[10px] bg-white rounded-[10px]">
              Увійти
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
