// @ts-check
import { test } from '@bicycle-codes/tapzero'
import '../src/index.js'

test('find an element', async t => {
    t.ok(document.querySelector('h1'), 'should find an h1')
})
