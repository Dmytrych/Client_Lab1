function fillArray(n){
    const arr = new Array(n - 1)
    for( let i = 0; i < n; i++){
        arr[i] = i
    }
    return arr
}
alert("First function result: " + fillArray(5))

function isExactDivision(num, firstDivider, secondDivider){
    return num % firstDivider == 0 && num % secondDivider == 0;
}
alert("Second function result: " + isExactDivision(10, 2, 5))

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
}
alert(capitalize("word"))