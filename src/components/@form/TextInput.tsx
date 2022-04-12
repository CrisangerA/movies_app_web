import { FC, InputHTMLAttributes } from 'react';
import styles from './textinput.module.css';

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  onChange,
  disabled = false,
  value,
  type = 'text',
}) => (
  <input
    placeholder={placeholder}
    type={type}
    className={styles.input}
    onChange={onChange}
    disabled={disabled}
    value={value}
  />
);

export default TextInput;
