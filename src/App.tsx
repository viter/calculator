import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Screen from './Components/Screen';
import Title from './Components/Title';
import ControlBar from './Components/ControlBar';
import ButtonsArea from './Components/ButtonsArea';

export default function App() {
  const [screenValue, setScreenValue] = useState('');
  const [screenOn, setScreenOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const buttonsRef = useRef<any>(null);

  useEffect(() => {
    if (!screenOn) {
      setScreenValue('');
    } else {
      setScreenValue('0');
    }
  }, [screenOn]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  function toggleScreen() {
    setScreenOn(!screenOn);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // updateScreen передаю пропсами аж до компонента Button через ButtonsArea.
  // cb - це колбек, який кожна кнопка має свій. Таким чином за допомогою функції updateScreen
  // результат роботи кнопок може апдейтити екран (компонент Screen)
  function updateScreen(cb: (screenValue: string) => string) {
    const val = cb(screenValue);
    setScreenValue(val);
  }

  return (
    <div className={darkMode ? 'dark' : undefined}>
      <main
        id="main"
        className="flex items-center justify-center h-screen min-w-[1600px] bg-stone-100 dark:bg-gray-600"
        tabIndex={0}
        onKeyUp={(e: KeyboardEvent) => {
          if (buttonsRef.current && screenOn) {
            buttonsRef.current.handleKeyUp(e);
          }
        }}
        onKeyDown={(e: KeyboardEvent) => {
          if (buttonsRef.current && screenOn) {
            buttonsRef.current.handleKeyDown(e);
          }
        }}
      >
        <div className=" py-2 px-3 w-1/4 shadow-lg bg-slate-300 dark:bg-slate-800 rounded">
          <Title />
          <Screen screenValue={screenValue} screenOn={screenOn} />
          <ControlBar action={toggleScreen} screenOn={screenOn} toggleDarkMode={toggleDarkMode} />
          <ButtonsArea ref={buttonsRef} updateScreen={updateScreen} screenOn={screenOn} darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
}
