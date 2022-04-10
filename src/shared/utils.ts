/* eslint-disable no-promise-executor-return */
const whiteListEmails = [{ email: 'pruebas@gmail.com', password: 'pruebas123' }];
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { whiteListEmails, delay };
