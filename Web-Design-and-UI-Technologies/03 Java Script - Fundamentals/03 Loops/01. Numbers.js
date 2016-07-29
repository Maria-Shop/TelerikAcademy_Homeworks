function Numbers(arg) {
    var number = +arg[0],
        i = 1,
        result = [];
    while (i <= number) {
        result.push(i++);
        i = i++;
    }
    console.log.apply(console, result);
}
Numbers([5]);
Numbers([1]);
