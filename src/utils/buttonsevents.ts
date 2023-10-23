export interface ButtonType {
  btn: string;
  btnKey: string;
  el: HTMLElement;
}

export function highlightButton(button: ButtonType | undefined) {
  if (button) {
    if (
      [
        'cancel',
        'del',
        'lb',
        'rb',
        'pow',
        'sqrt',
        'plus',
        'minus',
        'multiply',
        'divide',
        'equal',
      ].includes(button.btn)
    ) {
      button.el.classList.remove('bg-zinc-600');
    } else {
      button.el.classList.remove('bg-neutral-500');
    }
    button.el.classList.add('bg-red-600');
  }
}

export function removeHighlight(button: ButtonType | undefined) {
  if (button) {
    if (
      [
        'cancel',
        'del',
        'lb',
        'rb',
        'pow',
        'sqrt',
        'plus',
        'minus',
        'multiply',
        'divide',
        'equal',
      ].includes(button.btn)
    ) {
      button.el.classList.add('bg-zinc-600');
    } else {
      button.el.classList.add('bg-neutral-500');
    }
    button.el.classList.remove('bg-red-600');
  }
}

export function buttonAction(button: ButtonType | undefined) {}
