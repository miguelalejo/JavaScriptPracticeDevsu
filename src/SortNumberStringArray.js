function sort(arr) {

    var numbers = [];
    var cads = [];
    var k = 0;
    var l = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            numbers.push(arr[i]);
        } else {
            cads.push(arr[i]);
        }

    }
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;

            }
        }
    }

    for (var i = 0; i < cads.length; i++) {
        for (var j = i; j < cads.length; j++) {
            var cA=this.sumCharCode(cads[i])/cads[i].length;
            var cB=this.sumCharCode(cads[j])/cads[j].length;
            if (cA >cB ) {
                var temp = cads[i];
                cads[i] = cads[j];
                cads[j] = temp;
            }
        }
    }

    var orderArray = [];
    for (var i = 0; i < numbers.length; i++) {
        orderArray.push(numbers[i]);
    }

    for (var i = 0; i < cads.length; i++) {
        orderArray.push(cads[i]);
    }


    return orderArray;
}

function sumCharCode(cad) {
    var sum = 0;
    for (var i = 0; i < cad.length; i++) {
        sum += cad.charCodeAt(i);
    }
    return sum;

}

String.prototype.replaceAt = function (index, arr) {
    return this.substr(0, index) + arr + this.substr(index + arr.length);
}