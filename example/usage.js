const inquirer = require('inquirer')
const mockPrompt = require('..')

mockPrompt({ foo: 'hello foo' })

const questions = [
  { name: 'foo', type: 'input', message: 'foo' },
  { name: 'bar', type: 'confirm', message: 'bar', default: false }
]

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    // => { foo: 'hello foo', bar: false }
  })
