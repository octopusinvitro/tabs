describe("Connection", function() {

  var connection, request, apikey = "test", section = "travel",
	    testResponses = {
	      results: {
		      success : { "status": 200, "responseText": {'hello' : 'world'} },
		      fail    : { "status": 400, "responseText": "" }
		    }
	    };

  beforeEach(function() {
    jasmine.Ajax.install();
    connection = new Connection(Logger, apikey);
    connection.dataFrom(section);
    request = jasmine.Ajax.requests.mostRecent();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it("builds request params with the right properties", function() {
	  params = connection.buildParams("irrelevant");
    expect(params.hasOwnProperty("section")).toBe(true);
    expect(params.hasOwnProperty("show-fields")).toBe(true);
    expect(params.hasOwnProperty("order-by")).toBe(true);
    expect(params.hasOwnProperty("api-key")).toBe(true);
  });

  it("makes a get request", function() {
    request.respondWith(testResponses.results.success);
    expect(request.method).toEqual('GET');
  });

  it("makes a request to the right url", function() {
    request.respondWith(testResponses.results.success);
    expect(request.url).toEqual(fullUrlFrom(connection.url, section));
  });

  it("makes an unsuccesfull request", function() {
    spyOn(Logger, "logError");
    connection.dataFrom("nonExistentSection");
    request = jasmine.Ajax.requests.mostRecent();

    request.respondWith(testResponses.results.fail);
    expect(request.url).toBe(fullUrlFrom(connection.url, "nonExistentSection"));
    expect(Logger.logError).toHaveBeenCalled();
  });

  function fullUrlFrom(url, section) {
    return url + '?section=' + section + '&show-fields=trailText&order-by=newest&api-key=test';
  };

});
