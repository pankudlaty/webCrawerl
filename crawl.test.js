const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
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


test('absolute URL', () => {
  const inputURL = 'http://blog.boot.dev'
  const inputBody = '<!DOCTYPE html><body><a href="http://blog.boot.dev"<span>Go to Boot.dev</span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['http://blog.boot.dev/']
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML wrong link', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = []
  expect(actual).toEqual(expected)
})

test('relative URL', () => {
  const inputURL = 'http://blog.boot.dev'
  const inputBody = '<!DOCTYPE html><body><a href="/test/path"<span>Go to Boot.dev</span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['http://blog.boot.dev/test/path']
  expect(actual).toEqual(expected)
})

test('relative URL and absolute URL', () => {
  const inputURL = 'http://blog.boot.dev'
  const inputBody = '<!DOCTYPE html><body><a href="/test/path"<span>Go to Boot.dev</span></a><a href="https://blog.boot.dev"</a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['http://blog.boot.dev/test/path', 'https://blog.boot.dev/']
  expect(actual).toEqual(expected)
})



