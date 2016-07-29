function BinarySearch(args) {
    var arr = args[0].split('\n');
    var elementToSearch = arr[arr.length - 1];
    arr.pop();
    if (arr[0] >= 1 && arr[0] <= 1024) {
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i] == elementToSearch) {
                return i - 1;
            }
        }
        return -1;
    }
}
console.log(BinarySearch(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']));
