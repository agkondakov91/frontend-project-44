import { isEven, checkAnswer, askQuestion } from '../src/games/even.js'
import * as readlineSync from 'readline-sync'
import { randomInt } from 'crypto'

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}))

jest.mock('crypto', () => ({
  randomInt: jest.fn(),
}))

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('Brain-even game', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('isEven function', () => {
    test('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    test('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false)
      expect(isEven(1)).toBe(false)
      expect(isEven(17)).toBe(false)
    })
  })

  describe('checkAnswer function', () => {
    test('should return true and log "Correct!" for correct answer', () => {
      const result = checkAnswer('yes', 4, 'Sam')
      expect(result).toBe(true)
      expect(consoleSpy).toHaveBeenCalledWith('Correct!')
    })

    test('should return false and log error for wrong answer', () => {
      const result = checkAnswer('yes', 3, 'Sam')
      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith(
        `'yes' is wrong answer ;(. Correct answer was 'no'.`,
      )
      expect(consoleSpy).toHaveBeenCalledWith('Let\'s try again, Sam!')
    })
  })

  describe('askQuestion function', () => {
    test('should return answer and random number', () => {
      readlineSync.question.mockReturnValue('yes')
      randomInt.mockReturnValue(42)
      const result = askQuestion()
      expect(readlineSync.question).toHaveBeenCalledWith(
        'Question: 42\nYour answer: ',
      )
      expect(result).toEqual({ answer: 'yes', questionData: 42 })
    })
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })
})
