function normalizeURL(rawURL) {
  const myURL = new URL(rawURL);
  let fullPath = `${myURL.hostname}${myURL.pathname}`
  if (fullPath.length > 0 && fullPath.slice(-1) === '/') {
    fullPath = fullPath.slice(0, -1)
  }
  return fullPath
}
module.exports = {
  normalizeURL
}
