export interface ButtonType {
  btn: string;
  el: HTMLElement;
}

export function highlightButton(button: ButtonType, bgColorNumbers: string, bgColorFn: string) {
  if (['cancel', 'del', 'lb', 'rb', 'pow', 'sqrt', 'plus', 'minus', 'multiply', 'divide', 'equal'].includes(button.btn)) {
    button.el.classList.remove(bgColorFn);
  } else {
    button.el.classList.remove(bgColorNumbers);
  }
  button.el.classList.add('bg-red-600');
}

export function removeHighlight(button: ButtonType, bgColorNumbers: string, bgColorFn: string) {
  if (['cancel', 'del', 'lb', 'rb', 'pow', 'sqrt', 'plus', 'minus', 'multiply', 'divide', 'equal'].includes(button.btn)) {
    button.el.classList.add(bgColorFn);
  } else {
    button.el.classList.add(bgColorNumbers);
  }
  button.el.classList.remove('bg-red-600');
}

export const actions = {
  delClicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue.length === 2 && screenValue[0] === '-') {
      screenValue = '0';
    } else if (screenValue !== '0' && screenValue.length > 1) {
      screenValue = screenValue.slice(0, -1);
    } else {
      screenValue = '0';
    }
    return screenValue;
  },

  b0Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '0';
    }
    return screenValue;
  },

  b1Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '1';
    } else {
      screenValue = '1';
    }
    return screenValue;
  },

  b2Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '2';
    } else {
      screenValue = '2';
    }
    return screenValue;
  },

  b3Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '3';
    } else {
      screenValue = '3';
    }
    return screenValue;
  },

  b4Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '4';
    } else {
      screenValue = '4';
    }
    return screenValue;
  },

  b5Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '5';
    } else {
      screenValue = '5';
    }
    return screenValue;
  },

  b6Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '6';
    } else {
      screenValue = '6';
    }
    return screenValue;
  },

  b7Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '7';
    } else {
      screenValue = '7';
    }
    return screenValue;
  },

  b8Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '8';
    } else {
      screenValue = '8';
    }
    return screenValue;
  },

  b9Clicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '9';
    } else {
      screenValue = '9';
    }
    return screenValue;
  },

  cancelClicked: (screenValue: string) => {
    if (screenValue !== '0') {
      screenValue = '0';
    }
    return screenValue;
  },

  plusClicked: (screenValue: string) => {
    if (screenValue !== '0' && screenValue[screenValue.length - 1] !== '+') {
      screenValue += '+';
    }
    return screenValue;
  },

  minusClicked: (screenValue: string) => {
    if (screenValue === '0') {
      screenValue = '-';
    }
    if (screenValue[screenValue.length - 1] !== '-') {
      screenValue += '-';
    }
    return screenValue;
  },

  multiplyClicked: (screenValue: string) => {
    if (screenValue !== '0' && screenValue[screenValue.length - 1] !== 'x') {
      screenValue += 'x';
    }
    return screenValue;
  },

  divideClicked: (screenValue: string) => {
    if (screenValue !== '0' && screenValue[screenValue.length - 1] !== '/') {
      screenValue += '/';
    }
    return screenValue;
  },

  powClicked: (screenValue: string) => {
    if (screenValue !== '0' && screenValue[screenValue.length - 1] !== '^') {
      screenValue += '^';
    }
    return screenValue;
  },

  lbClicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '(';
    } else {
      screenValue = '(';
    }
    return screenValue;
  },

  rbClicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += ')';
    }
    return screenValue;
  },

  dotClicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue[screenValue.length - 1] !== '.') {
      screenValue += '.';
    }
    return screenValue;
  },

  piClicked: (screenValue: string) => {
    screenValue = resetAfterError(screenValue);
    if (screenValue !== '0') {
      screenValue += '3.14159265';
    } else {
      screenValue = '3.14159265';
    }
    return screenValue;
  },

  sqrtClicked: (screenValue: string) => {
    try {
      return String(eval(`Math.sqrt(${screenValue})`));
    } catch (error) {
      return 'Error';
    }
  },

  equalClicked: (screenValue: string) => {
    try {
      screenValue = screenValue.replace(/x/g, '*');
      screenValue = screenValue.replace(/\^/g, '**');
      return String(eval(screenValue));
    } catch (error) {
      return 'Error';
    }
  },
};

function resetAfterError(val: string): string {
  if (val === 'Infinity' || val === 'NaN' || val === 'Error') {
    return '0';
  }
  return val;
}
