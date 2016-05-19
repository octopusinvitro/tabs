describe("Logger", function() {

  it("logs an error", function() {
    spyOn(console, "log");
    var err = {"stack": "stack here"};

    Logger.logError(err);

    expect(console.log).toHaveBeenCalled();
  });

});
