import readlineSync from 'readline-sync'
import { getRandomNumber, printResult } from '../index.js'

const operators = ['+', '-', '*']

const getRandomOperator = () => {
  const index = getRandomNumber(0, operators.length - 1)
  return operators[index]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknow operator ${operator}`)
  }
}

export const askQuestion = () => {
  const num1 = getRandomNumber(1, 10)
  const num2 = getRandomNumber(1, 10)
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const answer = readlineSync
    .question(`Question: ${question}\nYour answer: `)
    .toLowerCase()
  return { answer, questionData: { num1, num2, operator } }
}

export const checkAnswer = (answer, questionData, userName) => {
  const { num1, num2, operator } = questionData
  const correctAnswer = calculate(num1, num2, operator).toString()

  return printResult(answer, correctAnswer, userName)
}
