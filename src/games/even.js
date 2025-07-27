import readlineSync from 'readline-sync'
import { getRandomNumber, printResult } from '../index.js'

const isEven = num => num % 2 === 0

export const askQuestion = () => {
  const randomNumber = getRandomNumber(1, 100)
  const answer = readlineSync
    .question(`Question: ${randomNumber}\nYour answer: `)
    .toLowerCase()
  return { answer, questionData: randomNumber }
}

export const checkAnswer = (answer, questionData, userName) => {
  const result = isEven(questionData)
  const correctAnswer = result ? 'yes' : 'no'

  return printResult(answer, correctAnswer, userName)
}
