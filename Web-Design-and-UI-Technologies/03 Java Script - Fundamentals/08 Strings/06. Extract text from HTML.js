function ExtractTextFromHTML(args) {
    var result = '';
    var regex = /<.*?>/gm;
    for (var i in args) {
        var line = args[i];
        if (regex.test(line)) {
            line = line.replace(regex, '').trim();
        } else {
            line = line.trim();
        }
        result += line;
    }
    console.log(result);
}
ExtractTextFromHTML([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);
