import { FC } from 'react';
import styles from './textinput.module.css';

interface InputProps {
  type?: 'email' | 'password';
  placeholder: string;
}

const TextInput: FC<InputProps> = ({ type = 'text', placeholder }) => (
  <input placeholder={placeholder} type={type} className={styles.input} />
);

export default TextInput;
