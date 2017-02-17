
Function "Function" =
    ("fn"/"function")
    p_name :(__ Identifier)?
    _ type :Typed?
    _ params :FunctionParams?
    _ '{'
    _ block: Block
    _ '}'
{
    var name;
    if (p_name) {
        name = p_name[1];
    }
    return ast({
        ast_type: "Function",
        ast_title: "fn",
        ast_childs: {
            Name: name,
            Type: type,
            Params: params,
            Block: block,
        },
    });
}

FunctionParams "Function Params" =
    '('
    params: (_ FunctionParam _ ',')*
    lastParam: (_ FunctionParam)?
    _ ')'
{
    var list = [];
    params.forEach(function (param) {
        list.push(param[1]);
    });
    if (lastParam) {
        list.push(lastParam[1]);
    }
    return ast({
        ast_type: "FunctionParams",
        ast_title: "x" + list.length + "",
        ast_childs: list,
    });
}

FunctionParam = 
    name :Identifier
    _ type :Typed?
    p_variadic: (_ "...")?
{
    var variadic = false;
    if (p_variadic) {
        variadic = true;
    }
    return ast({
        ast_type: "FunctionParam",
        ast_childs: {
            Name: name,
            Type: type,
        },
        ast_datas: {
            variadic: variadic,
        },
    });
}