const { controlEvents } = require("./helpers/data.events");

const questions = [
    'como?',
    'pq?',
    'oq?',
    'sabe?'
]

controlEvents(questions, 'data', 0)