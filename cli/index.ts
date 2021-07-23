import inquirer from 'inquirer'
import * as fs from 'fs'

import pageTemplate from './templates/pages/pageTemplate'
import blockTemplate from './templates/blocks/blockTemplate'
import indexTemplate from './templates/containers/indexTemplate'
import pageViewTemplate from './templates/containers/pageViewTemplate'
import usePageTemplate from './templates/containers/usePageTemplate'

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do: ',
      name: 'todo',
      choices: ['Generate complete page', 'Exit'],
      default: 'Yes'
    },
    {
      message: 'Enter page name: ',
      name: 'pageName',
      when(answers) {
        return answers.todo === 'Generate complete page'
      }
    }
  ])
  .then((answers) => {
    const { todo, pageName } = answers

    if (todo === 'Exit') {
      return
    }

    if (todo === 'Generate complete page') {
      fs.mkdir(`./src/containers/${pageName}Page`, (err) => {
        if (err) throw err
      })

      fs.writeFile(`./src/containers/${pageName}Page/index.tsx`, indexTemplate(pageName), (err) => {
        if (err) throw err
      })

      fs.writeFile(
        `./src/containers/${pageName}Page/${pageName}PageView.tsx`,
        pageViewTemplate(pageName),
        (err) => {
          if (err) throw err
        }
      )

      fs.writeFile(
        `./src/containers/${pageName}Page/use${pageName}Page.ts`,
        usePageTemplate(pageName),
        (err) => {
          if (err) throw err

          console.log('Containers finished.')
        }
      )

      fs.mkdir(`./src/components/blocks/${pageName}Page`, (err) => {
        if (err) throw err
      })

      fs.writeFile(
        `./src/components/blocks/${pageName}Page/index.ts`,
        blockTemplate(pageName),
        (err) => {
          if (err) throw err

          console.log('Blocks finished.')
        }
      )

      fs.writeFile(`./src/pages/${pageName.toLowerCase()}.tsx`, pageTemplate(pageName), (err) => {
        if (err) throw err

        console.log('Success!')
      })
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment')
    } else {
      console.error('Something went wrong', error)
    }
  })
