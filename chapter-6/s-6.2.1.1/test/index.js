var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require("../1.js")).not.be.throw();
    expect(output.stdout).to.be.equal("3\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require("../2.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "object 100",
      "object hello, world!",
      "object true",
      ""]);
  });
});