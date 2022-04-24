const { expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion')
jest.mock('../lib/Potion.js')

test('creates a player object', () => {
    const player = new Player();

    expect(player.name).toEqual(expect.any(String));
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strenth).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})