import styles from './CustomButton.module.scss';
import PlusIcon from '@/assets/PlusIcon';

type sizeType = 'small' | 'medium' | 'large';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: sizeType;
  leftIcon?: boolean;
  variant?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
  size,
  leftIcon,
  variant,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const buttonClass = `${styles.customButton} ${styles[className]} ${
    disabled ? `${styles.disabled}` : ''
  } ${styles[size]} ${leftIcon ? `${styles.withIcon}` : ''} ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={handleClick} disabled={disabled}>
      {leftIcon && (
        <span className="icon">
          <PlusIcon />
        </span>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
