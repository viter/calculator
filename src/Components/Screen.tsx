export default function Screen({ screenValue, screenOn }: { screenValue: string; screenOn: boolean }) {
  const screenOnStyle = 'w-full text-4xl p-2 shadow-inner focus:outline-none text-stone-600 bg-lime-50 dark:text-stone-800 dark:bg-slate-400 font-play text-right';
  const screenOffStyle = 'w-full text-4xl p-2 shadow-inner focus:outline-none bg-lime-100 dark:bg-slate-500 font-play text-right';

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log('//////////////');
    if (e.key === 'Escape') {
      console.log('Hi');
    }
  }

  return (
    <>
      <input type="text" name="screen" id="screen" className={screenOn ? screenOnStyle : screenOffStyle} disabled value={screenValue} onKeyUp={handleKeyUp} />
    </>
  );
}
