var assert = require('assert')

function test() {
  assert.equal(3 + 3, 6);
}

if (module == require.main) require('test').run(test);