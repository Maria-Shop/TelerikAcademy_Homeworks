function palindromCheck(str) {
    var palinArr, i, palindrom = [];
    palinArr = str.split(/[\s!.?,;:'"-()]/g);
    for (i = 0; i < palinArr.length; i++) {
        if (palinArr[i].toLowerCase() === palinArr[i].split('').reverse().join('').toLowerCase() &&
            palinArr[i] !== '') {
            palindrom.push(palinArr[i]);
        }
    }
    return palindrom.join(', ');
}
console.log(palindromCheck('There is a man, his name! was Bob. Eye, lala, exe, abba'));

//Дали String-a е палиндром
// function palindromCheck(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   console.log(reverseStr === lowRegStr);
//   if(reverseStr === lowRegStr){
//     console.log(lowRegStr);
//   }
// }
// palindromCheck("A man, a plan, a canal. Panama");
