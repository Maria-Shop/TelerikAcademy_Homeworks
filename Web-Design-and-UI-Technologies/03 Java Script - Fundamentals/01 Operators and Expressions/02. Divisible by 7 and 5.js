function CheckNumber(number) {
  if ((number % 7 === 0 && number % 5 === 0) && number !==5 && number !==7) {
        console.log('true ' + number);
     } else {
        console.log('false ' + number);
    }
}
CheckNumber(['3']);
CheckNumber(['0']);
CheckNumber(['5']);
CheckNumber(['7']);
CheckNumber(['35']);
CheckNumber(['140']);
