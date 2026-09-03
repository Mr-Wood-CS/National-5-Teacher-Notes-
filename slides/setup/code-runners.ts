import { defineCodeRunnersSetup } from '@slidev/types'

const pyodideReady = import(/* @vite-ignore */ '/pyodide/pyodide.mjs').then((pyodideModule) => {
  return pyodideModule.loadPyodide({
    indexURL: '/pyodide/',
  })
})

export default defineCodeRunnersSetup(() => {
  return {
    async python(code) {
      const pyodide = await pyodideReady
      let output = ''

      pyodide.setStdout({
        batched: (text) => {
          output += `${text}\n`
        },
      })

      pyodide.setStderr({
        batched: (text) => {
          output += `${text}\n`
        },
      })

      try {
        const result = await pyodide.runPythonAsync(code)

        if (result !== undefined) {
          output += String(result)
        }

        return {
          text: output.trim(),
        }
      } catch (error) {
        return {
          text: String(error),
        }
      }
    },
  }
})
