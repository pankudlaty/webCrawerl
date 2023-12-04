const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizes URL slash', () => {
  const input = 'http://blog.boot.dev/path/'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toBe(expected)
})

test('normalizes URL protocol', () => {
  const input = 'https://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toBe(expected)
})

test('normalizes URL http', () => {
  const input = 'http://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toBe(expected)
})
