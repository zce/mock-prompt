const inquirer = require('inquirer')

/**
 * Mock inquirer prompt
 * @param {object} fills Default return answers
 */
module.exports = fills => {
  if (typeof fills !== 'object') {
    throw new TypeError('The mocked answers must be an objects.')
  }

  const originalPrompt = inquirer.prompt

  inquirer.prompt = async questions => {
    const answers = {}

    for (const item of [].concat(questions)) {
      let result = fills[item.name]

      // value
      if (!result && item.default !== undefined) {
        result = typeof item.default === 'function'
          ? await item.default()
          : item.default
      }

      // validate
      if (typeof item.validate === 'function') {
        const valid = item.validate(result)
        if (valid !== true) throw new Error(valid)
      }

      answers[item.name] = result
    }

    return answers
  }

  return () => {
    inquirer.prompt = originalPrompt
  }
}
