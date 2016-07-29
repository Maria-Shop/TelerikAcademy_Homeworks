function subStringInText(args) {
    var toSearch, text, reg, answer;
    toSearch = args[0];
    text = args[1];
    reg = new RegExp(toSearch, 'gi');
    answer = text.match(reg);
    console.log(answer.length);
}

// function subStringInText(args) {
//     var toSearch, text, reg, answer;
//     toSearch = args[0];
//     text = args[1];
//     // reg = new RegExp(toSearch, 'gi');
//     // answer = text.match(reg);
//     // console.log(answer.length);
//     var index=text.indexOf(toSearch);
//     var count=0;
//     while(index>=0){
//       index=text.indexOf(toSearch,index+1);
//       count+=1;
//     }
//     console.log(count);
//
// }

subStringInText(
    [
        'in',
        'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
    ]);
