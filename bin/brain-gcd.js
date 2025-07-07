#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { askQuestion, checkAnswer } from '../src/games/gcd.js'

playGame(
  askQuestion,
  checkAnswer,
  'Find the greatest common divisor of given numbers.',
)
