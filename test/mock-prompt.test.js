const test = require('ava')
const inquirer = require('inquirer')
const mockPrompt = require('..')

test.serial('error', async t => {
  t.throws(() => mockPrompt(), { instanceOf: TypeError })
})

test.serial('normal', async t => {
  const stop = mockPrompt({ message: 'hello world' })

  const { message } = await inquirer.prompt({
    name: 'message',
    type: 'input',
    message: 'message'
  })

  t.is(message, 'hello world')

  stop()
})

test.serial('default', async t => {
  const stop = mockPrompt({})

  const { foo, bar } = await inquirer.prompt([
    {
      name: 'foo',
      type: 'input',
      message: 'foo',
      default: 'hello~'
    },
    {
      name: 'bar',
      type: 'input',
      message: 'bar',
      default: () => 'hello~'
    }
  ])

  t.is(foo, 'hello~')
  t.is(bar, 'hello~')

  stop()
})

test.serial('validate', async t => {
  const stop = mockPrompt({ message: 'hello' })

  const { message } = await inquirer.prompt({
    name: 'message',
    type: 'input',
    message: 'message',
    validate: input => true
  })

  t.is(message, 'hello')

  await t.throwsAsync(inquirer.prompt({
    name: 'message',
    type: 'input',
    message: 'message',
    validate: () => 'validate error'
  }), { message: 'validate error' })

  stop()
})
