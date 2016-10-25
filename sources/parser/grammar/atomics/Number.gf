
Number "Number" =
    it:[0-9]+
    dc:$("." [0-9]*)?
{
    var value = it.join("");
    if (dc) {
        value += dc;
    }
    return {
        ast_type: "Number",
        ast_title: value,
    };
}