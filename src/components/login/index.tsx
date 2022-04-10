import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('./LoginForm'));
const LogoutButton = dynamic(() => import('./LogoutButton'));

export { LoginForm, LogoutButton };
