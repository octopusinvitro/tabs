var UI = {
  fetchingTrigger1: "#tab1",
  fetchingTrigger2: "#tab2",
  fetchingTrigger3: "#tab3",

  tabOutput1: "#tab-content1 ul",
  tabOutput2: "#tab-content2 ul",
  tabOutput3: "#tab-content3 ul",

  labelsSelector: ".tabs__label",
  activeClass:    "active",

  sectionFrom: {
    "#tab1": "uk-news",
    "#tab2": "football",
    "#tab3": "travel"
  }
};

UI.format = function(articles) {

  var makeTitle = function(webTitle) {
    return '<h1 class="article__title">' + webTitle + '</h1>'
  };

  var makeText = function(trailText) {
    return '<p class="article__text">' + trailText + '</p>'
  };

  var makeItem = function(webUrl, contents) {
    return '<li class="article"><a href="' + webUrl + '" class="article__link">' +
           contents +
           '</a></li>';
  };

  var buildList = function() {
	  return $.map(articles, function(article) {
      var content = makeTitle(article.webTitle) + makeText(article.trailText);
      return makeItem(article.webUrl, content);
	  }).join("\n");
  };

  return buildList();
};

UI.loadArticles = function(label, content, connection, parser) {

  // var dataFrom = function(section) {
  //   return connection.dataFrom(section);
  // };
  //
  // var tabInfoFrom = function(data) {
  //   return parser.tabInfoFrom(data);
  // };
  //
  // var load = function(label, content) {
  //   var data = dataFrom(UI.sectionFrom[label]);
  //   var list = UI.format(tabInfoFrom(data));
  //   $(content).html(list);
  // };
  //
  // load(label, content);
};

UI.setup = function(connection, parser) {

  // var swapClass = function(element) {
	// $(UI.labelsSelector).removeClass(activeClass);
  //   element.addClass(activeClass);
  // };
  //
  // var registerTabListener = function(tabSelector, contentSelector) {
  //   $(document).on("click", tabSelector, function(e) {
  //     UI.loadArticles(tabSelector, contentSelector, connection, parser);
  //     swapClass($(this));
  //   });
  // };
  //
  // var registerAll = function() {
  //   registerTabListener(UI.fetchingTrigger1, UI.tabOutput1);
  //   registerTabListener(UI.fetchingTrigger2, UI.tabOutput2);
  //   registerTabListener(UI.fetchingTrigger3, UI.tabOutput3);
  // };
  //
  // registerAll();
};
