import readlineSync from 'readline-sync'
import { getRandomNumber, printResult } from '../index.js'

const getNumberProgression = (start, step, length) => {
  const progression = []

  for (let i = start; i < step * length + start; i += step) {
    progression.push(i)
  }

  return progression
}

export const askQuestion = () => {
  const start = getRandomNumber(1, 75)
  const step = getRandomNumber(1, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = getNumberProgression(start, step, length)
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `)

  return { answer, questionData: { start, step, hiddenIndex } }
}

export const checkAnswer = (answer, questionData, userName) => {
  const { start, step, hiddenIndex } = questionData
  const correctAnswer = (start + hiddenIndex * step).toString()

  return printResult(answer, correctAnswer, userName)
}
