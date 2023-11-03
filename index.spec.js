import {
    generateRandomEmailDomain,
    generateRandomFirstName,
    generateRandomLastName,
} from './index.js';

describe('index', () => {
    it('should generate a random first name', () => {
        const randomFirstName = generateRandomFirstName();

        expect(typeof randomFirstName).toBe('string');
        expect(randomFirstName).not.toEqual(generateRandomFirstName());
    });

    it('should generate a random last name', () => {
        const randomLastName = generateRandomLastName();

        expect(typeof randomLastName).toBe('string');
        expect(randomLastName).not.toEqual(generateRandomLastName());
    });

    it('should generate a random email domain', () => {
        const randomEmailDomain = generateRandomEmailDomain();

        expect(typeof randomEmailDomain).toBe('string');
        expect(randomEmailDomain).not.toEqual(generateRandomEmailDomain());
    });
});
