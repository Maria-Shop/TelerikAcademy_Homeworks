function LexComparison(args) {
    var word = args[0].split('\n'),
        x = word[0],
        y = word[1];
    if ((x.length && y.length) >= 1 && (x.length && y.length) <= 128) {
        if (x > y) {
            return '>';
        } else if (x < y) {
            return '<';
        } else {
            return '=';
        }
    } else {
        console.log('Out of range');
    }
}
console.log(LexComparison(['hello\nhalo']));
console.log(LexComparison(['food\nfood']));
