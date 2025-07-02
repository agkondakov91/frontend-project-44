// Импортируем модуль из библиотеки
import readline from 'readline-sync'

export const getName = () => {
  const name = readline.question('May I have your name? ')
  console.log(`Hello, ${name}`)
}
