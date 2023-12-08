const { argv } = require('node:process')

function main() {
  const args = argv.slice(2)
  switch (args.length) {
    case 0:
      console.log("Not enough arguments")
      break;
    case 1:
      console.log(`Crawling URL:${args[0]}`)
      break;
    default:
      console.log("Too much arguments")
      break;
  }
}

main()
