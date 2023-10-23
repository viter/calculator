import ButtonONOFF from './ButtonONOFF';

interface ControlBarProps {
  action: () => void;
  screenOn: boolean;
}

export default function ControlBar({ action, screenOn }: ControlBarProps) {
  return (
    <div className="my-4 flex justify-between">
      <ButtonONOFF action={action} screenOn={screenOn} />
    </div>
  );
}
