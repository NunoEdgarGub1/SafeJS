
Statement =
    content:(
        Variable
        / Condition
        / Loop
        / TryCatch
        / Return
        / Resolve
        / Throw
        / Break
        / Continue
        / Expression
    )
{
    return ast({
        ast_type: "Statement",
        ast_title: "_",
        ast_childs: {
            Content: content,
        },
    });
}
