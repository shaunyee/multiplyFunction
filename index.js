//JavaScript Coding: Write a multiplication function in javascript to use like this.

function mul(num1) {
    return function (num2) {
      return function (num3) {
        return num1 * num2 * num3
      }
    }
  }



console.log(mul(2)(4)(5));