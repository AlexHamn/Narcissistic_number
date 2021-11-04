function narcissistic(value) {
  
  let number = value.toString();
  number = [...number]
  
  let length = number.length;
    
  let sum = 0;
  number.forEach((e) => {
   sum += Math.pow(Number(e), length)
  });
  
  return (sum === value);
}
