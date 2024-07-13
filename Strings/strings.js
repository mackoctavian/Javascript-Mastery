//Searching string for substring using indexOf
function searchString(word) {
    return word.indexOf("Mack")
}

const result = searchString("Mack Octavian")
console.log(result)

//Searching for string using includes method
function searchString1(string, word) {
    return string.includes(word)
}

const result1 = searchString1("Javascript is awesome", "awesome")
console.log(result1);

//Getting a substring of string
function gettingSubstring(string) {
    return string.slice(3, 6)
}

const res = gettingSubstring("hotdog")
console.log(res)