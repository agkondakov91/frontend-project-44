import readlineSync from 'readline-sync'
import { getRandomNumber, printResult } from '../index.js'

const isPrime = (num) => {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

export const askQuestion = () => {
  const randomNumber = getRandomNumber(1, 100)
  const answer = readlineSync
    .question(`Question: ${randomNumber}\nYour answer: `)
    .toLowerCase()
  return { answer, questionData: randomNumber }
}

export const checkAnswer = (answer, questionData, userName) => {
  const result = isPrime(questionData)
  const correctAnswer = result ? 'yes' : 'no'

  return printResult(answer, correctAnswer, userName)
}
