#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { askQuestion, checkAnswer } from '../src/games/calc.js'

playGame(askQuestion, checkAnswer, 'What is the result of the expression?')
