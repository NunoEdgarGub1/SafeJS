var utils = require("../../../../utils");
var Export = require("../Export");

Export.register("Variable", function (node) {
  if (node.isAsync) {
    var str = "";
    str += "function(___n){";
    str += "_tjs._async._assign(";
    if (node.value.isAsync) {
      str += "[1," + Export.node("Expression", node.value) + "]";
    }
    else {
      str += "[0," + Export.node("Expression", node.value) + "]";
    }
    str += ",";
    str += "function(v){";
    str += node.name + "=v;";
    str += "}";
    str += ",___n)";
    str += "}";
    return str;
  }
  else {
    var str = "";
    // str += "var ";
    str += node.name;
    str += "=";
    str += Export.node("Expression", node.value);
    // if (node.readonly) {
    //   str += " // READ ONLY";
    // }
    return str;
  }
});
