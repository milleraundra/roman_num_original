describe ('romanize', function() {
  it ("will return M for 1000", function() {
  expect(romanize(1000)).to.equal("M");
  });

  it ("will return C for 100", function() {
    expect(romanize(100)).to.equal("C");
  });

  it ("will return DL for 550", function() {
    expect(romanize(550)).to.equal("DL");
  });

  it ("will return a long number for 49000", function() {
    expect(romanize(49000)).to.equal(false);
  });

  it ("will return alert if number is greater than or equal to 4000", function() {
    expect(romanize(4001)).to.equal(false);
  });

  it ("will return IV instead of IIII for the number 4", function() {
    expect(romanize(4)).to.equal("IV");
  });

  it ("will return XL instead of XXXX for the number 40", function() {
    expect(romanize(40)).to.equal("XL");
  });

  it ("will return CD instead of DDDD for the number 400", function() {
    expect(romanize(400)).to.equal("CD");
  });

});


// describe ('romanize', function() {
//   it ("returns I for the input 1", function() {
//     expect(romanize("1")).to.equal("I");
//   });
//
//   it ("returns V for the input 5", function() {
//     expect(romanize("5")).to.equal("V");
//   });
// });
