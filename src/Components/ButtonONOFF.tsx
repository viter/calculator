interface ButtonProps {
  action: () => void;
  screenOn: boolean;
}

export default function ButtonONOFF({ action, screenOn }: ButtonProps) {
  return (
    <button
      onClick={action}
      className="bg-orange-600 hover:bg-orange-500 text-slate-100 rounded min-w-[50px] p-1"
    >
      {screenOn ? 'Викл' : 'Вкл'}
    </button>
  );
}
