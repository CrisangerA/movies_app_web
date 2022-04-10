import { ChangeEventHandler, FC } from 'react';
import styles from './textinput.module.css';

interface InputProps {
  type?: 'email' | 'password';
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const TextInput: FC<InputProps> = ({ placeholder, onChange, disabled = false, type = 'text' }) => (
  <input
    placeholder={placeholder}
    type={type}
    className={styles.input}
    onChange={onChange}
    disabled={disabled}
  />
);

export default TextInput;
