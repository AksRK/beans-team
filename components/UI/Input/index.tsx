import './input.scss';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface IInputsProps {
  error?: boolean;
  className?: string;
}
interface IInput extends InputHTMLAttributes<HTMLInputElement>, IInputsProps {}
interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement>, IInputsProps {}

const Input = forwardRef<HTMLInputElement, IInput>(({ error, className, ...props }, ref) => {
  return <input className={`input ${error ? 'input--error' : ''} ${className}`} {...props} type={'text'} ref={ref} />;
});

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ error, className, ...props }, ref) => {
  return (
    <textarea ref={ref} className={`input input--text-area ${error ? 'input--error' : ''} ${className}`} {...props} />
  );
});

export { Input, TextArea };
