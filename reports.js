function printReports(pages) {
  console.log('Report printing...')
  const pagesArr = Object.entries(pages)
  for (const page of pagesArr) {
    console.log(`Found ${page[1]} internal links to ${page[0]}`)
  }
}


module.exports = {
  printReports
}
