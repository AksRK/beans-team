import './radio.scss';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface IPaymentTerm {
  name: string;
  price: string;
  description: string[];
}
interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  items: IPaymentTerm[];
  checkedItem: string | null;
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ id, items, checkedItem, ...props }, ref) => {
  return (
    <div className={`radio-payments-term-list`} id={id}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`radio-payments-term-item ${item.name === checkedItem ? 'radio-payments-term-item--checked' : ''}`}
        >
          <label>{item.name}</label>
          <div className={'radio-payments-term-item__price'}>{item.price}</div>
          {item.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <input ref={ref} type="radio" value={item.name} {...props} checked={item.name === checkedItem} />
        </div>
      ))}
    </div>
  );
});

export default Radio;
