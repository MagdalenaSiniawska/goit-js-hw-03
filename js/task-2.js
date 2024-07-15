function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);
    let newArrayLength = newArray.length;

    if (newArrayLength >= maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
          
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);