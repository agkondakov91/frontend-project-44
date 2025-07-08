#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { askQuestion, checkAnswer } from '../src/games/progression.js'

playGame(askQuestion, checkAnswer, 'What number is missing in the progression?')
