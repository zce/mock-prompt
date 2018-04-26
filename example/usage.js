const inquirer = require('inquirer')
const mockPrompt = require('..')

mockPrompt({ foo: 'hello foo' })

inquirer.prompt([
  { name: 'foo', type: 'input', message: 'foo' },
  { name: 'bar', type: 'confirm', message: 'bar', default: false }
])
.then(answers => {
  console.log(answers)
  // => { foo: 'hello foo', bar: false }
})
