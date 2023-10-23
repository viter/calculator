interface ButtonProps {
  action?: () => void;
  className: string;
  val: string;
  id: string;
}

export default function Button({ action, className, val, id }: ButtonProps) {
  return (
    <button id={id} onClick={action} className={className}>
      {val}
    </button>
  );
}
