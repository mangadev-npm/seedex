import { firstNames } from './dictionary/firstNames.js';
import { lastNames } from './dictionary/lastNames.js';
import { emailDomains } from './dictionary/emailDomains.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const generateRandomFirstName = () => {
    return firstNames[getRandomInt(firstNames.length)];
};

export const generateRandomLastName = () => {
    return lastNames[getRandomInt(lastNames.length)];
};

export const generateRandomEmailDomain = () => {
    return emailDomains[getRandomInt(emailDomains.length)];
};
