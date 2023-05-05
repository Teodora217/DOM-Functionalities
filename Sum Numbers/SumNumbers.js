function calc() {
  //read value of two input fields
  //sum values
  //set result as value of output field

  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  const sum = num1 + num2;
  document.getElementById("sum").value = sum;
}
