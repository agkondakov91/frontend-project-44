import readline from 'readline-sync'

let userName
let randomNumber

export const greetingUser = () => {
  console.log('Welcome to the Brain Games!')
  const name = readline.question('May I have your name? ')
  userName = name
  console.log(`Hello, ${name}`)
  return name
}

export const ascQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  randomNumber = Math.floor(Math.random() * 100) + 1
  const userAnswer = readline.question(
    `Question: ${randomNumber}\nYour answer: `,
  )
  return userAnswer
}

export const checkAnswer = (answer) => {
  if (randomNumber % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!')
      return true
    }

    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`,
    )
    return false
  }

  if (randomNumber % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!')
      return true
    }

    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
    )
    return false
  }
}
