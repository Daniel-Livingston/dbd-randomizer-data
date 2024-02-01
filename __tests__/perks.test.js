const assert = require("assert");
const perks = require("./__fixtures__/perks");
const survivors = require("./__fixtures__/survivors");

const EXPECTED_NUMBER_OF_PERKS = 249;
const EXPECTED_NUMBER_OF_SURVIVOR_PERKS = 134;

describe("Perks", () => {
  it("should have the expected number of perks", () => {
    assert.strictEqual(perks.length, EXPECTED_NUMBER_OF_PERKS);
  });

  it("should have no duplicate perk names", () => {
    const set = new Set(perks.map((p) => p.name));
    assert.strictEqual(set.size, perks.length);
  });
});

describe("Survivor Perks", () => {
  it("should have the expected number of perks", () => {
    assert.strictEqual(perks.length, EXPECTED_NUMBER_OF_SURVIVOR_PERKS);
  });

  it("should have exactly 3 perks assigned to each survivor", () => {
    survivors.forEach(({ name }) => {
      const survivorPerks = perks.filter((p) => p.character === name);
      assert.strictEqual(
        survivorPerks.length,
        3,
        `${name} has ${survivorPerks.length} perks`
      );
    });
  });
});
