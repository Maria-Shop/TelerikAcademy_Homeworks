function parseURL(args) {
    var i, len, start, end,
        protocol = '',
        server = '',
        resource = '',
        input = args[0];

    protocol = input.substring(0, input.indexOf(':'));
    start = input.indexOf('/') + 2;
    end = input.indexOf('/', start + 1);
    server = input.substring(start, end);
    resource = input.substring(end);
    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);
}
parseURL(['http://telerikacademy.com/Courses/Courses/Details/239']);
