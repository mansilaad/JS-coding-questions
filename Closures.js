function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(() => {
          console.log(i);
        }, i * 1000);
      }
      close(i);
    }
  }
  //x();
  
  function multiply(num1, num2) {
    if (num2 !== undefined) {
      return num1 * num2;
    }
    return function doMultiply(num2) {
      return num1 * num2;
    };
  }
  console.log('Multiplication is ', multiply(2, 5));
  const double = multiply(10);
  console.log(double);
  console.log(double(3));
  
  function arrayFromValue(item) {
    return;// Automatic return is added 
    [item];
  }
  console.log(arrayFromValue(10));