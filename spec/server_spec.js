var request = require("request");
var server = require("../server.js")
var base_url = "http://localhost:3000/"

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body).toEqual("Hello World\n");

        done();
      });
    });
  });
});
