const assert = require("assert");
const survivors = require("./__fixtures__/survivors");

const EXPECTED_NUMBER_OF_SURVIVORS = 40;

describe("Survivors", () => {
  it("should have the expected number of survivors", () => {
    assert.strictEqual(
      survivors.length,
      EXPECTED_NUMBER_OF_SURVIVORS,
      `Expected ${EXPECTED_NUMBER_OF_SURVIVORS} survivors, but got ${survivors.length}`
    );
  });

  it("should have no duplicate survivor names", () => {
    const set = new Set(survivors.map((s) => s.name));
    assert.strictEqual(
      set.size,
      survivors.length,
      "Duplicate survivor names found"
    );
  });
});
