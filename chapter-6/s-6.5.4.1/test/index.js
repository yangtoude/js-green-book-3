var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "true", "true", "false", "true", "false",  // PART - 1
      "true", "true", "false", "null",  // PART - 2
      ""]);
  });
});