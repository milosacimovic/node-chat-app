const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    //from matches
    //text matches
    //createdAt is a number
    var from = 'Misko';
    var text = 'Hey';

    var ret = generateMessage(from, text);
    expect(ret.from).toBe(from);
    expect(ret.text).toBe(text);
    expect(ret.createdAt).toExist();
    expect(ret.createdAt).toBeA('number');
  });
});
