import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('./LoginForm'));

// eslint-disable-next-line import/prefer-default-export
export { LoginForm };
