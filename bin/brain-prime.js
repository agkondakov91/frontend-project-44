#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { askQuestion, checkAnswer } from '../src/games/prime.js'

playGame(
  askQuestion,
  checkAnswer,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
)
