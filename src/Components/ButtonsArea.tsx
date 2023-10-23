import { useEffect } from 'react';
import Button from './Button';
import { highlightButton, removeHighlight, buttonAction, ButtonType } from '../utils/buttonsevents';

export default function ButtonsArea({ screenOn }: { screenOn: boolean }) {
  const numbers =
    'text-slate-100 bg-neutral-500 rounded min-w-[70px] hover:bg-neutral-400 active:bg-red-700';
  const fn = 'text-slate-100 bg-zinc-600 hover:bg-zinc-500 active:bg-red-700 rounded min-w-[70px]';

  useEffect(() => {
    const app = document.getElementById('main') as HTMLDivElement;
    const buttons: ButtonType[] = [
      { btn: 'cancel', btnKey: 'Escape', el: document.getElementById('cancel') as HTMLElement },
      { btn: 'del', btnKey: 'Backspace', el: document.getElementById('del') as HTMLElement },
      { btn: 'lb', btnKey: '(', el: document.getElementById('lb') as HTMLElement },
      { btn: 'rb', btnKey: ')', el: document.getElementById('rb') as HTMLElement },
      { btn: 'b0', btnKey: '0', el: document.getElementById('b0') as HTMLElement },
      { btn: 'b1', btnKey: '1', el: document.getElementById('b1') as HTMLElement },
      { btn: 'b2', btnKey: '2', el: document.getElementById('b2') as HTMLElement },
      { btn: 'b3', btnKey: '3', el: document.getElementById('b3') as HTMLElement },
      { btn: 'b4', btnKey: '4', el: document.getElementById('b4') as HTMLElement },
      { btn: 'b5', btnKey: '5', el: document.getElementById('b5') as HTMLElement },
      { btn: 'b6', btnKey: '6', el: document.getElementById('b6') as HTMLElement },
      { btn: 'b7', btnKey: '7', el: document.getElementById('b7') as HTMLElement },
      { btn: 'b8', btnKey: '8', el: document.getElementById('b8') as HTMLElement },
      { btn: 'b9', btnKey: '9', el: document.getElementById('b9') as HTMLElement },
      { btn: 'pi', btnKey: 'p', el: document.getElementById('pi') as HTMLElement },
      { btn: 'dot', btnKey: '.', el: document.getElementById('dot') as HTMLElement },
      { btn: 'pow', btnKey: '^', el: document.getElementById('pow') as HTMLElement },
      { btn: 'sqrt', btnKey: 's', el: document.getElementById('sqrt') as HTMLElement },
      { btn: 'plus', btnKey: '+', el: document.getElementById('plus') as HTMLElement },
      { btn: 'minus', btnKey: '-', el: document.getElementById('minus') as HTMLElement },
      { btn: 'multiply', btnKey: '*', el: document.getElementById('multiply') as HTMLElement },
      { btn: 'divide', btnKey: '/', el: document.getElementById('divide') as HTMLElement },
      { btn: 'equal', btnKey: 'Enter', el: document.getElementById('equal') as HTMLElement },
    ];

    app.addEventListener('keyup', handleKeyUp);
    app.addEventListener('keydown', handleKeyDown);

    function handleKeyUp(e: KeyboardEvent) {
      e.preventDefault();
      if (screenOn) {
        const button: ButtonType | undefined = buttons.find((entry) => entry.btnKey === e.key);
        removeHighlight(button);
        buttonAction(button);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      e.preventDefault();
      if (screenOn) {
        const button: ButtonType | undefined = buttons.find((entry) => entry.btnKey === e.key);
        highlightButton(button);
      }
    }

    return () => {
      app.removeEventListener('keyup', handleKeyUp);
      app.removeEventListener('keydown', handleKeyDown);
    };
  }, [screenOn]);

  return (
    <div className="grid grid-cols-5 gap-1 min-h-[300px] mb-2">
      <Button val="C" id="cancel" className={fn} />
      <Button val="Del" id="del" className={fn + ' col-span-2'} />
      <Button val="(" id="lb" className={fn} />
      <Button val=")" id="rb" className={fn} />

      <Button val="7" id="b7" className={numbers} />
      <Button val="8" id="b8" className={numbers} />
      <Button val="9" id="b9" className={numbers} />
      <Button val="pow" id="pow" className={fn} />
      <Button val="sqrt" id="sqrt" className={fn} />

      <Button val="4" id="b4" className={numbers} />
      <Button val="5" id="b5" className={numbers} />
      <Button val="6" id="b6" className={numbers} />
      <Button val="+" id="plus" className={fn} />
      <Button val="-" id="minus" className={fn} />

      <Button val="1" id="b1" className={numbers} />
      <Button val="2" id="b2" className={numbers} />
      <Button val="3" id="b3" className={numbers} />
      <Button val="x" id="multiply" className={fn} />
      <Button val="/" id="divide" className={fn} />

      <Button val="Pi" id="pi" className={numbers} />
      <Button val="0" id="b0" className={numbers} />
      <Button val="." id="dot" className={numbers} />
      <Button val="=" id="equal" className={fn + ' col-span-2'} />
    </div>
  );
}
