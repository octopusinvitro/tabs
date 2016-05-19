function Connection(logger, apikey) {
  this.logger = logger;
  this.url    = "http://content.guardianapis.com/search";
  this.params = {
    "show-fields": "trailText",
    "order-by":    "newest",
    "api-key":     apikey
  };
};

Connection.prototype.buildParams = function(section) {
  var params = { "section": section};
  return $.extend(params, this.params);
};

Connection.prototype.dataFrom = function(section) {
  var that  = this;

  $.ajax({
    type: "GET",
    url: this.url,
    dataType: "json",
    data: this.buildParams(section)
  }).done(function(data) {
    return data;
  }).fail(function(err) {
    that.logger.logError(err);
    return {};
  });

};
