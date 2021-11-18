function fizzBuzz(num: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= num; i++) {
    result.push(getItemValue(i))
  }

  return result
}

function getItemValue(num: number): string {
  const isDivisibleBy3 = num % 3 === 0
  const isDivisibleBy5 = num % 5 === 0

  let result = '';

  if (isDivisibleBy3) {
    result = 'Fizz'
  }

  if (isDivisibleBy5) {
    result += 'Buzz'
  }

  if (!result) {
    result = num.toString()
  }

  return result
}