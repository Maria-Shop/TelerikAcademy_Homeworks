function FormatWithPlaceholders(args) {
    var str = JSON.parse(args[0]);
    var result = args[1];
    for (var property in str) {
        var regex = new RegExp("#\{" + property + "\}", "g");
        result = result.replace(regex, str[property]);
    }
    console.log(result);
}
FormatWithPlaceholders([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]);
FormatWithPlaceholders([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);
