function isPrime(num) {
  let i = 2;
  while(i<num) {
    if(num % i === 0) return false;
    i++
  }
  return true
}
// reutrn false
isPrime(4);