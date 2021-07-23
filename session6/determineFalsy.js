//There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.
let getCheck = (input) => {
    //console.log(!input)
      if (!input) return true
      return false
   }
   console.log(getCheck(undefined))

   module.exports = getCheck