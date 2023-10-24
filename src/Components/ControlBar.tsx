import ButtonModeSelector from './ButtonModeSelector';
import ButtonONOFF from './ButtonONOFF';

interface ControlBarProps {
  action: () => void;
  toggleDarkMode: () => void;
  screenOn: boolean;
}

export default function ControlBar({ action, screenOn, toggleDarkMode }: ControlBarProps) {
  return (
    <div className="my-6 flex justify-between">
      <ButtonONOFF action={action} screenOn={screenOn} />
      <ButtonModeSelector toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
