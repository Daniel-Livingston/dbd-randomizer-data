const assert = require("assert");
const killers = require("./__fixtures__/killers");

const EXPECTED_NUMBER_OF_KILLERS = 34;

describe("Killers", () => {
  it("should have the expected number of killers", () => {
    assert.strictEqual(
      killers.length,
      EXPECTED_NUMBER_OF_KILLERS,
      `Expected ${EXPECTED_NUMBER_OF_KILLERS} killers, but got ${killers.length}`
    );
  });

  it("should have no duplicate killer names", () => {
    const set = new Set(killers.map((k) => k.name));
    assert.strictEqual(
      set.size,
      killers.length,
      "Duplicate killer names found"
    );
  });
});
