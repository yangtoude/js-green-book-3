var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      ...`the super is: ${Object}`.split("\n"),  // the super is: function Object ...
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      ...`the super is: ${Object}`.split("\n"),  // the super is: function Object ...
      ...`the super is: ${new Function}`.split("\n"), // the super is: function anonymous...
      ""]);
  });
});