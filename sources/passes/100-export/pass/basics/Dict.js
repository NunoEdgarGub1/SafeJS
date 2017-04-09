var utils = require("../../../../utils");
var Export = require("../Export");

Export.register("Dict", function (node) {
  return "{ /* NOT IMPLEMENTED */ }";
  if (node.isAsync) {
    var str = "";
    str += "function(___n){";
    str += "_tjs._async._dict([";
    var els = [];
    utils._.each(node.elements, function (element) {
      els.push(element.exportAsFunction(_context));
    });
    str += els.join(",");
    str += "],___n);";
    str += "}";
    return str;
  }
  else {
    var els = [];
    utils._.each(node.elements, function (element) {
      els.push(element.export(_context));
    });
    return "[" + els.join(",") + "]";
  }
});
