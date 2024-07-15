function slugify(title) {
    let titleToLowerCase = title.toLowerCase();
    let titleSplit = titleToLowerCase.split(" ");
    let titleJoin = titleSplit.join("-");
    return titleJoin;
}

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");