const assert = require("assert");
const killers = require("./__fixtures__/killers");
const perks = require("./__fixtures__/perks");
const survivors = require("./__fixtures__/survivors");

const EXPECTED_NUMBER_OF_PERKS = 249;
const EXPECTED_NUMBER_OF_KILLER_PERKS = 115;
const EXPECTED_NUMBER_OF_GENERIC_KILLER_PERKS = 13;
const EXPECTED_NUMBER_OF_SURVIVOR_PERKS = 134;
const EXPECTED_NUMBER_OF_GENERIC_SURVIVOR_PERKS = 14;

describe("Perks", () => {
  it("should have the expected number of perks", () => {
    assert.strictEqual(perks.length, EXPECTED_NUMBER_OF_PERKS);
  });

  it("should have no duplicate perk names", () => {
    const set = new Set(perks.map((p) => p.name));
    assert.strictEqual(set.size, perks.length);
  });
});

describe("Killer Perks", () => {
  it("should have the expected number of perks for killer", () => {
    assert.strictEqual(
      perks.filter((p) => p.role === "killer").length,
      EXPECTED_NUMBER_OF_KILLER_PERKS
    );
  });

  it("should have exactly 3 perks assigned to each killer", () => {
    killers.forEach(({ name }) => {
      const killerPerks = perks.filter((p) => p.character === name);
      assert.strictEqual(
        killerPerks.length,
        3,
        `${name} has ${killerPerks.length} perks`
      );
    });
  });

  it("should have the expected number of generic killer perks", () => {
    assert.strictEqual(
      perks.filter((p) => p.role === "killer" && p.character === null).length,
      EXPECTED_NUMBER_OF_GENERIC_KILLER_PERKS
    );
  });

  it("all perks belonging to specific killers should be labelled as killer perks", () => {
    killers.forEach(({ name }) => {
      const killerPerks = perks.filter((p) => p.character === name);
      killerPerks.forEach((p) => {
        assert.strictEqual(
          p.role,
          "killer",
          `${p.name} is not labelled as a killer perk`
        );
      });
    });
  });
});

describe("Survivor Perks", () => {
  it("should have the expected number of perks for survivor", () => {
    assert.strictEqual(
      perks.filter((p) => p.role === "survivor").length,
      EXPECTED_NUMBER_OF_SURVIVOR_PERKS
    );
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

  it("should have the expected number of generic survivor perks", () => {
    assert.strictEqual(
      perks.filter((p) => p.role === "survivor" && p.character === null).length,
      EXPECTED_NUMBER_OF_GENERIC_SURVIVOR_PERKS
    );
  });

  it("all perks belonging to specific survivors should be labelled as survivor perks", () => {
    survivors.forEach(({ name }) => {
      const survivorPerks = perks.filter((p) => p.character === name);
      survivorPerks.forEach((p) => {
        assert.strictEqual(
          p.role,
          "survivor",
          `${p.name} is not labelled as a survivor perk`
        );
      });
    });
  });
});
