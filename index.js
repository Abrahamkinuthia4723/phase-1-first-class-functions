function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function namedfunction() {
      console.log("The child is Ian.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Please help me.')
    }
  }