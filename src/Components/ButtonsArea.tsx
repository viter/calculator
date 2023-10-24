import { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './Button';
import { highlightButton, removeHighlight, actions } from '../utils/buttonsevents';

interface ButtonsAreaProps {
  updateScreen: (cb: () => string) => void;
  screenOn: boolean;
}

const ButtonsArea = forwardRef(({ updateScreen, screenOn }: ButtonsAreaProps, ref) => {
  const numbers = 'text-slate-100 bg-neutral-500 rounded min-w-[70px] hover:bg-neutral-400 active:bg-red-700';
  const fn = 'text-slate-100 bg-zinc-600 hover:bg-zinc-500 active:bg-red-700 rounded min-w-[70px]';

  // Все що потрібне для рендеренгу кнопок, який відбувається в порядку їх внесення до мапи.
  const buttons = new Map()
    .set('cancel', { btnKey: 'Escape', val: 'C', class: fn, el: useRef(), action: actions.cancelClicked })
    .set('del', { btnKey: 'Backspace', val: 'Del', class: fn + ' col-span-2', el: useRef(), action: actions.delClicked })
    .set('lb', { btnKey: '(', val: '(', class: fn, el: useRef(), action: actions.lbClicked })
    .set('rb', { btnKey: ')', val: ')', class: fn, el: useRef(), action: actions.rbClicked })

    .set('b7', { btnKey: '7', val: '7', class: numbers, el: useRef(), action: actions.b7Clicked })
    .set('b8', { btnKey: '8', val: '8', class: numbers, el: useRef(), action: actions.b8Clicked })
    .set('b9', { btnKey: '9', val: '9', class: numbers, el: useRef(), action: actions.b9Clicked })
    .set('pow', { btnKey: '^', val: 'pow', class: fn, el: useRef(), action: actions.powClicked })
    .set('sqrt', { btnKey: 's', val: 'sqrt', class: fn, el: useRef(), action: actions.sqrtClicked })

    .set('b4', { btnKey: '4', val: '4', class: numbers, el: useRef(), action: actions.b4Clicked })
    .set('b5', { btnKey: '5', val: '5', class: numbers, el: useRef(), action: actions.b5Clicked })
    .set('b6', { btnKey: '6', val: '6', class: numbers, el: useRef(), action: actions.b6Clicked })
    .set('plus', { btnKey: '+', val: '+', class: fn, el: useRef(), action: actions.plusClicked })
    .set('minus', { btnKey: '-', val: '-', class: fn, el: useRef(), action: actions.minusClicked })

    .set('b1', { btnKey: '1', val: '1', class: numbers, el: useRef(), action: actions.b1Clicked })
    .set('b2', { btnKey: '2', val: '2', class: numbers, el: useRef(), action: actions.b2Clicked })
    .set('b3', { btnKey: '3', val: '3', class: numbers, el: useRef(), action: actions.b3Clicked })
    .set('multiply', { btnKey: '*', val: 'x', class: fn, el: useRef(), action: actions.multiplyClicked })
    .set('divide', { btnKey: '/', val: '/', class: fn, el: useRef(), action: actions.divideClicked })

    .set('pi', { btnKey: 'p', val: 'Pi', class: numbers, el: useRef(), action: actions.piClicked })
    .set('b0', { btnKey: '0', val: '0', class: numbers, el: useRef(), action: actions.b0Clicked })
    .set('dot', { btnKey: '.', val: '.', class: numbers, el: useRef(), action: actions.dotClicked })
    .set('equal', { btnKey: 'Enter', val: '=', class: fn + ' col-span-2', el: useRef(), action: actions.equalClicked });

  // Перекидаю функції handleKeyUp і handleKeyDown в парент компонент App,
  // бо вони мають викликаються по клавіатурній події елемента main, який є в паренті.
  // Таким чином ціла сторінка слухає клавіатурні події. Можна це обмежити тільки самим калькулятором, перекинувши
  // події безпосередньо діву калькулятора в App компоненті а не main елементу в тому ж App компоненті.
  useImperativeHandle(ref, () => ({
    handleKeyUp(e: KeyboardEvent) {
      // preventDefault застосовано заради клавіші Enter, щоб вона не спрацьовувала по своєму призначенню.
      // Тут вона служить як кнопка '='.
      e.preventDefault();
      const button = Array.from(buttons).find((entry) => entry[1].btnKey === e.key);
      if (button) {
        removeHighlight({ btn: button[0], el: button[1].el.current });
        updateScreen(button[1].action);
      }
    },

    handleKeyDown(e: KeyboardEvent) {
      e.preventDefault();
      const button = Array.from(buttons).find((entry) => entry[1].btnKey === e.key);
      if (button) {
        highlightButton({ btn: button[0], el: button[1].el.current });
      }
    },
  }));

  return (
    <div className="grid grid-cols-5 gap-1 min-h-[300px] mb-2">
      {Array.from(buttons).map((button) => (
        <Button
          key={button[0]}
          val={button[1].val}
          id={button[0]}
          className={button[1].class}
          // кнопки мають реагувати на події клавіатури, тому присвоюю їм рефки
          //щоб мати доступ до їх html властивостей (в даному випадку до їх класів)
          ref={button[1].el}
          action={button[1].action && screenOn ? button[1].action : undefined}
          updateScreen={updateScreen}
        />
      ))}
    </div>
  );
});

export default ButtonsArea;
