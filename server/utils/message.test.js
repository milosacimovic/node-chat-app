const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Milos';
    var latitude = 1;
    var longitude = 1;
    //createdAt
    var ret = generateLocationMessage(from, latitude, longitude);

    expect(ret.from).toBe(from);
    expect(ret.createdAt).toBeA('number');
    expect(ret.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)
  });
});
