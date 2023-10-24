interface ButtonProps {
  action: () => void;
  screenOn: boolean;
}

export default function ButtonONOFF({ action, screenOn }: ButtonProps) {
  return (
    <button onClick={action} className="bg-orange-600 hover:bg-orange-500 dark:bg-orange-800 dark:hover:bg-orange-700 text-slate-100 dark:text-slate-200 rounded min-w-[50px] p-1">
      {screenOn ? 'Викл' : 'Вкл'}
    </button>
  );
}
