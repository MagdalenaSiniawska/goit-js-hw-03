function filterArray(numbers, value) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++){
        if (value < numbers[i]) {
            newArray.push(numbers[i])
        } 
    }
    return newArray
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);