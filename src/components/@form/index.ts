import dynamic from 'next/dynamic';

const TextInput = dynamic(() => import('./TextInput'));

// eslint-disable-next-line import/prefer-default-export
export { TextInput };
