System.register(["./application.6c9ac.js"], function (_export, _context) {
  "use strict";

  var Application, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_application6c9acJs) {
      Application = _application6c9acJs.Application;
    }],
    execute: function () {
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});