import {
  getRandomOperator,
  calculate,
  askQuestion,
  checkAnswer,
} from '../src/games/calc'

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}))

jest.mock('crypto', () => ({
  randomInt: jest.fn(),
}))

jest.mock('../src/index.js', () => ({
  getRandomNumber: jest.fn(),
  printResult: jest.fn(),
}))

describe('Brain-calc game', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getRandomOperator function', () => {
    test.each([
      { index: 0, expected: '+' },
      { index: 1, expected: '-' },
      { index: 2, expected: '*' },
    ])(
      'should return $expected when getRandomNumber returns $index',
      ({ index, expected }) => {
        jest
          .requireMock('../src/index.js')
          .getRandomNumber.mockReturnValue(index)
        expect(getRandomOperator()).toBe(expected)
      }
    )
  })

  describe('calculate function', () => {
    test.each([
      { input: [1, 2, '+'], expected: 3, description: 'addition' },
      { input: [5, 3, '-'], expected: 2, description: 'subtraction' },
      { input: [4, 6, '*'], expected: 24, description: 'multiplication' },
    ])('should calculate $description correctly', ({ input, expected }) => {
      expect(calculate(...input)).toBe(expected)
    })

    test('should throw an error for unknown operator', () => {
      expect(() => calculate(40, 2, '/')).toThrow('Unknow operator /')
    })
  })

  describe('askQuestion function', () => {
    test.each([
      {
        num1: 5,
        num2: 3,
        operatorIndex: 0,
        operator: '+',
        answer: '8',
        question: '5 + 3',
      },
      {
        num1: 7,
        num2: 4,
        operatorIndex: 1,
        operator: '-',
        answer: '3',
        question: '7 - 4',
      },
      {
        num1: 2,
        num2: 5,
        operatorIndex: 2,
        operator: '*',
        answer: '10',
        question: '2 * 5',
      },
    ])(
      'should return question $question and answer $answer',
      ({ num1, num2, operatorIndex, operator, answer, question }) => {
        jest
          .requireMock('../src/index.js')
          .getRandomNumber.mockReturnValueOnce(num1)
          .mockReturnValueOnce(num2)
          .mockReturnValueOnce(operatorIndex)
        jest.requireMock('readline-sync').question.mockReturnValue(answer)

        const result = askQuestion()
        expect(result).toEqual({
          answer,
          questionData: { num1, num2, operator },
        })
        expect(jest.requireMock('readline-sync').question).toHaveBeenCalledWith(
          `Question: ${question}\nYour answer: `
        )
      }
    )
  })

  describe('checkAnswer function', () => {
    test('should return true for correct answer', () => {
      jest.requireMock('../src/index.js').printResult.mockReturnValue(true)
      const questionData = { num1: 5, num2: 3, operator: '+' }
      const result = checkAnswer('8', questionData, 'Alice')
      expect(result).toBe(true)
      expect(
        jest.requireMock('../src/index.js').printResult
      ).toHaveBeenCalledWith('8', '8', 'Alice')
    })

    test('should return false for incorrect answer', () => {
      jest.requireMock('../src/index.js').printResult.mockReturnValue(false)
      const questionData = { num1: 5, num2: 3, operator: '+' }
      const result = checkAnswer('7', questionData, 'Alice')
      expect(result).toBe(false)
      expect(
        jest.requireMock('../src/index.js').printResult
      ).toHaveBeenCalledWith('7', '8', 'Alice')
    })
  })
})
