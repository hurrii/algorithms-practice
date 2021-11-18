function fizzBuzz(num: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= num; i++) {
    result.push(getValue(i))
  }

  return result;
}

function getValue(num: number): string {
  const isDivisibleBy3 = num % 3 === 0
  const isDivisibleBy5 = num % 5 === 0

  if (isDivisibleBy3) {
    return isDivisibleBy5 ? 'FizzBuzz' : 'Fizz'
  }

  if (isDivisibleBy5) {
    return 'Buzz'
  }

  return num.toString()
}