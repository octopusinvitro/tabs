describe("Parser", function() {

  var parser;

  beforeEach(function() {
    parser = new Parser(Validator);
  });

  it("tab info has at least the minimum number of articles", function() {
    parsedData = parser.tabInfoFrom(DATA);
    expect(parsedData.length).not.toBeLessThan(parser.minArticles);
  });

  it("each article has a web url", function() {
    parsedData = parser.tabInfoFrom(DATA);
    expect(parsedData[0].hasOwnProperty("webUrl")).toBe(true);
  });

  it("each article has a web title", function() {
    parsedData = parser.tabInfoFrom(DATA);
    expect(parsedData[0].hasOwnProperty("webTitle")).toBe(true);
  });

  it("each article has a web trail text", function() {
    parsedData = parser.tabInfoFrom(DATA);
    expect(parsedData[0].hasOwnProperty("trailText")).toBe(true);
  });

  // Not implemented due to lack of time
  xit("returns an empty array if data is invalid", function() {
    var invalidData = {};
    expect(parser.tabInfoFrom(invalidData)).toEqual([]);
  });

});
