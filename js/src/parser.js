function Parser(validator) {
  this.validator   = validator;
  this.minArticles = 5;
};

Parser.prototype.tabInfoFrom = function(data) {

  var all = function() {
    return data.response.results;
  };

  var articles = function() {
    return all().slice(0, this.minArticles);
  };

  var getArticleInfo = function(article) {
    return {
      "webUrl":    article.webUrl,
      "webTitle":  article.webTitle,
      "trailText": article.fields.trailText
    }
  };

  var getTabInfo = function() {
    return $.map(articles(), function(article) {
      return getArticleInfo(article);
    });
  };

  var buildTabInfo = function() {
    // if (this.validator.ckeck(data)) {
      return getTabInfo();
    // } else {
    //   return [];
    // }
  }

  return buildTabInfo();
};
