var assert = require('assert')

function test() {
  assert.equal(3 + 2, 5);
}

if (module == require.main) require('test').run(test);