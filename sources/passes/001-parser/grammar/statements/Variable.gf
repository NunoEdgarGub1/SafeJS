
Variable "Variable" =
    mode:("var"/"let") __
    _ name :Identifier
    type :(_ Typed)?
    value :(_ "=" _ Expression)?
{
    var val;
    if (value) {
        val = value[3];
    }
    var t;
    if (type) {
        t = type[1];
    }
    return ast({
        ast_type: "Variable",
        ast_title: mode,
        ast_childs: {
            Name: name,
            Type: t,
            Value: val,
        },
        ast_datas: {
            mode: mode,
        },
    });
}