import { forwardRef } from 'react';

interface ButtonProps {
  action?: () => string;
  updateScreen: (cb: () => string) => void;
  className: string;
  val: string;
  id: string;
}

const Button = forwardRef(({ action, updateScreen, className, val, id }: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
  function handleClick() {
    if (action && updateScreen) {
      updateScreen(action);
    }
  }
  return (
    <button id={id} onClick={handleClick} className={className} ref={ref}>
      {val}
    </button>
  );
});

export default Button;
