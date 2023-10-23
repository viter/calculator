import { useEffect, useState } from 'react';
import Screen from './Components/Screen';
import Title from './Components/Title';
import ControlBar from './Components/ControlBar';
import ButtonsArea from './Components/ButtonsArea';

export default function App() {
  const [screenValue, setScreenValue] = useState('');
  const [screenOn, setScreenOn] = useState(false);

  useEffect(() => {
    if (!screenOn) {
      setScreenValue('');
    } else {
      setScreenValue('0');
    }
  }, [screenOn]);

  function toggleScreen() {
    setScreenOn(!screenOn);
  }
  return (
    <main
      id="main"
      className="flex items-center justify-center h-screen min-w-[1600px] bg-stone-100"
      tabIndex={0}
    >
      <div className=" py-2 px-3 w-1/4 shadow-lg bg-slate-300 rounded">
        <Title />
        <Screen screenValue={screenValue} screenOn={screenOn} />
        <ControlBar action={toggleScreen} screenOn={screenOn} />
        <ButtonsArea screenOn={screenOn} />
      </div>
    </main>
  );
}
