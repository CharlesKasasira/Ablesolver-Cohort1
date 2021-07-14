let handleName = (name) => {
    //Do not hand more than one name. We know that names are separated by a space.
    let nameChunks = name.split(" ")
    // Check if the nameChunks is an object which is also an array in Javascript and return out of the code.
    if(typeof nameChunks === 'object' && nameChunks.length > 1) return false

    // Use string.charAt(index) to get the first letter of the string which is name
    // Then chain toUpperCase() to convert the given letter to uppercase

    let firstLetterToUpperCase = nameChunks[0].charAt(0).toUpperCase()

    // Use string.slice(start, end) to extract remaining letters from the given string which is name
    let otherLetters = nameChunks[0].slice(1)
    //String.slice() returns all the letters after the letter at index 0
    // then chain toLowerCase() to transform the remaining characters to lowercase

    let otherLettersToLowerCase = otherLetters.toLowerCase()
    //concatenate the first letter which in uppercase to others which are in lowercase at this level and assign to the name

    let newName = `${firstLetterToUpperCase}${otherLettersToLowerCase}`

    //Return the new name
    return newName

}

module.export = handleName 

console.table(handleName("David")); // 0 => david
console.table(handleName("David Wampamba")); // False