import './switch.scss';
import { forwardRef, InputHTMLAttributes } from 'react';

interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {}

const Switch = forwardRef<HTMLInputElement, ISwitch>(({ checked, ...props }, ref) => {
  return (
    <div className={`switch ${checked ? 'switch--checked' : ''}`}>
      <div className={'switch__mark'} />
      <input {...props} type={'checkbox'} ref={ref} />
    </div>
  );
});

export default Switch;
