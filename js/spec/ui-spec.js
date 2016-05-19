describe("UI", function() {

  var connection, parser, apikey = "test",
      fetchingTrigger1 = UI.fetchingTrigger1,
      tabOutput1       = UI.tabOutput1,
      articles         = [
        {"webUrl": "url1", "webTitle": "title1", "trailText": "trailText1"},
        {"webUrl": "url2", "webTitle": "title2", "trailText": "trailText2"}
      ];

  beforeEach(function() {
    connection = new Connection(Logger, apikey);
    parser     = new Parser(Validator);
  });

  it("formatting returns elements with a title", function() {
    expect(countOccurrencesOf("<h1", UI.format(articles))).toEqual(2);
    expect(countOccurrencesOf("title1</h1>", UI.format(articles))).toEqual(1);
    expect(countOccurrencesOf("title2</h1>", UI.format(articles))).toEqual(1);
  });

  it("formatting returns elements with a trail text", function() {
    expect(countOccurrencesOf("<p", UI.format(articles))).toEqual(2);
    expect(countOccurrencesOf("trailText1</p>", UI.format(articles))).toEqual(1);
    expect(countOccurrencesOf("trailText2</p>", UI.format(articles))).toEqual(1);
  });

  it("formatting returns as many elements as articles", function() {
    expect(countOccurrencesOf("<li", UI.format(articles))).toEqual(2);
    expect(countOccurrencesOf("<a", UI.format(articles))).toEqual(2);
    expect(countOccurrencesOf("url1", UI.format(articles))).toEqual(1);
    expect(countOccurrencesOf("url2", UI.format(articles))).toEqual(1);
  });

  xit("calls the fetcher with the right section when a tab is clicked", function() {
    setFixtures('<a id="' + fetchingTrigger1 + '">Tab Label</a>');
    spyOn(connection, "dataFrom");

    UI.loadArticles(fetchingTrigger1, tabOutput1, connection, parser);
    $(fetchingTrigger1).click();

    expect(connection.dataFrom).toHaveBeenCalledWith(UI.sectionFrom[fetchingTrigger1]);
  });

  xit("passes data to the parser", function() {
    setFixtures('<a id="' + fetchingTrigger1 + '">Tab Label</a>');
    spyOn(parser, "tabInfoFrom");

    UI.loadArticles(fetchingTrigger1, tabOutput1, connection, parser);
    $(fetchingTrigger1).click();

    expect(parser.tabInfoFrom).toHaveBeenCalled();
  });

  xit("loads the list of articles when a tab is clicked", function() {
    setFixtures('<a id="' + fetchingTrigger1 + '">Tab Label</a>' +
                '<div id="' + tabOutput1 + '"><ul></ul></div>');
    spyOn(connection, "dataFrom").and.returnValue("irrelevant");
    spyOn(parser, "tabInfoFrom").and.returnValue(articles);

    UI.setup(connection, parser);
    $(fetchingTrigger1).click();

    expect(countOccurrencesOf("<li", $(tabOutput1).html())).toEqual(2);
  });

  function countOccurrencesOf(substring, text) {
    return text.split(substring).length - 1;
  };

});
