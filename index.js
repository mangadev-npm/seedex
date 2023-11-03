import { firstNames } from './dictionary/firstNames';
import { lastNames } from './dictionary/lastNames';
import { emailDomains } from './dictionary/emailDomains';

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
