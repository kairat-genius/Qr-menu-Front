import signImages from '@/utils/signImages';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

const RightImages = () => {
  const isSign = useAppSelector((state) => state.auth.isSign);

  return (
    <>
      {isSign === 'reset' ? (
        <>
          <div className="circle move-x">
            <img src={signImages.forgot.f1} alt="food frame" id="cfirst" />
            <img src={signImages.forgot.f2} alt="food frame" id="csecond" />
            <img src={signImages.forgot.f3} alt="food frame" id="cthird" />
            <img src={signImages.forgot.f4} alt="food frame" id="cfourth" />
          </div>
        </>
      ) : (
        <div className="circle"></div>
      )}

      <div
        id="animated-circle-container"
        className={isSign === 'reset' ? 'up' : ''}
      >
        <div className="dashed-svg-circle">
          <svg viewBox="0 0 346 346" width="346" height="346">
            <circle
              id="svg-circle"
              r="168"
              fill="none"
              cx="50%"
              cy="50%"
              stroke="#EA6A12"
              strokeWidth="4px"
              strokeDasharray="25px"
            ></circle>
          </svg>
          <img src={signImages.sign.food1} alt="food frame" id="first" />
          <img src={signImages.sign.food2} alt="food frame" id="second" />
          <img src={signImages.sign.food3} alt="food frame" id="third" />
          <img src={signImages.sign.food4} alt="food frame" id="fourth" />
          <img src={signImages.sign.food5} alt="food frame" id="fifth" />
          <img src={signImages.sign.food6} alt="food frame" id="sixth" />
        </div>
      </div>
    </>
  );
};
export default RightImages;
