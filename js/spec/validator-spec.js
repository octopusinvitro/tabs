// Not implemented due to lack of time

describe("Validator", function() {

  it("detects when data has the correct format", function() {
    expect(Validator.check(DATA)).toBe(true);
  });

  xit("detects when data has the incorrect format", function() {
    var invalidData = {}
    expect(Validator.check(invalidData)).toBe(false);
  });

});
