const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function (){

  let paint;

  beforeEach(function(){
    paint = new Paint(0);
  });

  it ('should have a number of litres', function() {
    assert.strictEqual(paint.litres, 0)
  });

  it ('should be empty?', function(){
    assert.strictEqual(paint.checkEmpty(),true)
  })

  it ('should be able to empty of paint', function(){
    paint2 = new Paint(80);
    paint2.emptyPaint()
    assert.strictEqual(paint2.litres,0)
  });

});
