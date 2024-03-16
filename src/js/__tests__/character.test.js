const { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } = require('../character');

describe('Character class', () => {
    test('creating a character', () => {
        const character = new Character('John', 'Swordsman');
        expect(character.name).toBe('John');
        expect(character.type).toBe('Swordsman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(0);
        expect(character.defence).toBe(0);
    });

    test('creating a character with invalid name', () => {
        expect(() => new Character('J', 'Swordsman')).toThrow();
    });

    test('creating a character with invalid type', () => {
        expect(() => new Character('John', 'InvalidType')).toThrow();
    });
});

describe('Bowman class', () => {
    test('creating a Bowman', () => {
        const bowman = new Bowman('Robin');
        expect(bowman.name).toBe('Robin');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });
});

describe('Swordsman class', () => {
    test('creating a Swordsman', () => {
        const swordsman = new Swordsman('Arthur');
        expect(swordsman.name).toBe('Arthur');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });
});

describe('Magician class', () => {
    test('creating a Magician', () => {
        const magician = new Magician('Merlin');
        expect(magician.name).toBe('Merlin');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });
});

describe('Undead class', () => {
    test('creating an Undead', () => {
        const undead = new Undead('Dracula');
        expect(undead.name).toBe('Dracula');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });
});

describe('Zombie class', () => {
    test('creating a Zombie', () => {
        const zombie = new Zombie('Walker');
        expect(zombie.name).toBe('Walker');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});

describe('Daemon class', () => {
    test('creating a Daemon', () => {
        const daemon = new Daemon('Lucifer');
        expect(daemon.name).toBe('Lucifer');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });
});
