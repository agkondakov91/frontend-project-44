import readlineSync from 'readline-sync'
import { getRandomNumber } from '../index.js'

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no'
}

export const askQuestion = () => {
  const randomNumber = getRandomNumber(1, 100)
  const answer = readlineSync
    .question(`Question: ${randomNumber}\nYour answer: `)
    .toLowerCase()
  return { answer, questionData: randomNumber }
}

export const checkAnswer = (answer, questionData, userName) => {
  const correctAnswer = isEven(questionData)
  if (answer !== 'yes' && answer !== 'no') {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    )
    console.log(`Let's try again, ${userName}`)
    return false
  }

  if (answer === correctAnswer) {
    console.log('Correct!')
    return true
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  )
  console.log(`Let's try again, ${userName}`)
  return false
}
