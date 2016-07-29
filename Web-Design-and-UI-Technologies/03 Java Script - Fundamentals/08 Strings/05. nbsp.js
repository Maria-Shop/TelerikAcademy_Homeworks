function nbsp(args) {
    var text = args[0],
        result;
    result = text.replace(/\s/g, '&nbsp;');
    console.log(result);
}
nbsp(['hello world']);
nbsp(['This text contains 4 spaces!!']);
