/*
Example: map([1,2,3], (n) => n%4) == [2,4,6]
*/

const head = (array) => array[0];
const rest = (array) => array.slice(1, array.length);

/* Example: map([1,2,3], (n) x> n * 2) === [2, 4, 6]
 */
 const map = (array, fx) => {
    // implement

    //arrayResp
    let e, qArr;
    if(array.length > 0){
        e = head(array);
        qArr = map(rest(array), fx)
        return [fx(e), ...qArr]
    }
    return [];
} 
 
//carefull comparing two arrays
console.log(JSON.stringify(map([1,2,3], (n) => n * 2)) == JSON.stringify([2,4,6]))
console.log(map([1,2,3], (n) => n * 2)) //[ 2, 4, 6 ]