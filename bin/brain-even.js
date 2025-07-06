#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { askQuestion, checkAnswer } from '../src/games/even.js'

playGame(
  askQuestion,
  checkAnswer,
  'Answer "yes" if the number is even, otherwise answer "no".',
)
