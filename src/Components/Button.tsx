import { forwardRef } from 'react';

interface ButtonProps {
  action?: () => void;
  className: string;
  val: string;
  id: string;
}

const Button = forwardRef(
  ({ action, className, val, id }: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    return (
      <button id={id} onClick={action} className={className} ref={ref}>
        {val}
      </button>
    );
  },
);

export default Button;
