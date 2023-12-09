const { crawlPage } = require('./crawl.js')
const { printReport, printReports } = require('./reports.js')
const { argv } = require('node:process')

async function main() {
  if (argv.length < 3) {
    console.log('no website URL provided')
  }
  if (argv.length > 3) {
    console.log('too many arguments')
  }
  const baseURL = argv[2]

  console.log(`starting crawl of: ${baseURL}...`)

  const pages = await crawlPage(baseURL, baseURL, {})

  printReports(pages)

}

main()
