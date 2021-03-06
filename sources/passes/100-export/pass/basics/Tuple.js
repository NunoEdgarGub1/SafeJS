var utils = require("../../../../utils");
var Export = require("../Export");

Export.register("Tuple", function (node) {
  if (node.isAsync) {
    var str = "";
    str += "function(___n){";
    str += "_tjs._async._tuple([";
    var els = [];
    utils._.each(node.elements, function (element) {
      if (element.isAsync) {
        els.push("[1," + Export.node("Expression", element) + "]");        
      }
      else {
        els.push("[0," + Export.node("Expression", element) + "]");
      }
    });
    str += els.join(",");
    str += "],___n);";
    str += "}";
    return str;
  }
  else {
    var els = [];
    utils._.each(node.elements, function (element) {
      els.push(Export.node("Expression", element));
    });
    return "[" + els.join(",") + "]";
  }
});
