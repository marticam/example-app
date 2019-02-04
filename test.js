var assert = require('assert')

function test() {
  assert.equal(3 + 3, 3);
}

if (module == require.main) require('test').run(test);