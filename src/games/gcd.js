import readlineSync from 'readline-sync'
import { getRandomNumber, printResult } from '../index.js'

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) return Math.abs(a)
  return getGreatestCommonDivisor(b, a % b)
}

export const askQuestion = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `)
  return { answer, questionData: { num1, num2 } }
}

export const checkAnswer = (answer, questionData, userName) => {
  const { num1, num2 } = questionData
  const correctAnswer = getGreatestCommonDivisor(num1, num2).toString()

  return printResult(answer, correctAnswer, userName)
}
