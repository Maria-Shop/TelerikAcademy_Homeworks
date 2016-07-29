function ThirdBit(number) {
  var mask = 1 << 3,
  x = number & mask,
  bit = x >> 3;
  return console.log(bit);
}
ThirdBit(['15']);
ThirdBit(['1024']);
