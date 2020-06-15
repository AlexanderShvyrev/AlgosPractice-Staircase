//Staircase Function 
//    #
//   ##
//  ###
// ####

function staircase(n) {
    let stringSpace = ''
    let stringHash = '#'
    let addSpace = ' '
    let addHash = '#'
    for (let i = 1; i < n - 1; i++) {
        let newString = stringSpace.concat(addSpace)
        stringSpace = newString
    }
    for (let j = n; j > 0; j--) {
        if (stringHash.length < n) {
            console.log(stringSpace, stringHash)
            let newHash = stringHash.concat(addHash)
            stringHash = newHash
            let newnewSpace = stringSpace.slice(1, j - 1)
            stringSpace = newnewSpace
        } else {
            let newHash = stringHash.concat(addHash)
            console.log(stringHash)
        }
    }

}
console.log(staircase(6))