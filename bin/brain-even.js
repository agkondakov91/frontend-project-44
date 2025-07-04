#!/usr/bin/env node
import { greetingUser, ascQuestion, checkAnswer } from '../src/allGames/even.js'
import { playGame } from '../src/play.js'

playGame(greetingUser, ascQuestion, checkAnswer)
