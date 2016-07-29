function ExchangeIfGreater(args) {
    var x = +args[0],
        y = +args[1];
    if (x < y) {
        console.log(x + ' ' + y);
    } else {
        console.log(y + ' ' + x);
    }
}
ExchangeIfGreater(['5', '2']);
ExchangeIfGreater(['3', '4']);
ExchangeIfGreater(['5.5', '4.5']);
