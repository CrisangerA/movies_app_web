/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useAuth from '@hooks/useAuth';
import Image from 'next/image';
import styles from './logoutbutton.module.css';

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.child} onClick={() => logout()}>
        <Image src='/static/logos/icon-logout.png' alt='logout icon' width={30} height={30} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default LogoutButton;
