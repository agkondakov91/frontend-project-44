import { getName } from '../src/cli'
import readlineSync from 'readline-sync'

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}))

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('CLI module', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should prompt for name and log greeting', () => {
    readlineSync.question.mockReturnValue('John')
    const result = getName()
    expect(readlineSync.question).toHaveBeenCalledWith('May I have your name? ')
    expect(consoleSpy).toHaveBeenCalledWith('Hello, John')
    expect(result).toBe('John')
  })

  test('should handle empty name input', () => {
    readlineSync.question.mockReturnValue('')
    const result = getName()
    expect(readlineSync.question).toHaveBeenCalledWith('May I have your name? ')
    expect(consoleSpy).toHaveBeenCalledWith('Hello, ')
    expect(result).toBe('')
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })
})
