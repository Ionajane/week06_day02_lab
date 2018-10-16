const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe ('Decorator', function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator()
    redpaint = new Paint(10);
    bluepaint = new Paint(22);
    room = new Room(4);
  });

  it('should start with an empty paint stock', function(){
    assert.deepStrictEqual(decorator.stock , [])
  });

  it('should add can of paint to stock', function(){
    decorator.addCan(redpaint);
    assert.deepStrictEqual(decorator.stock,[redpaint]);
  });

  it('should calculate litres of paint in stock', function(){
    decorator.addCan(redpaint);
    decorator.addCan(bluepaint);
    assert.deepStrictEqual(decorator.calculateLitres(),32);
  });

  it('should be able to calculate if enough paint for room', function(){
    decorator.addCan(redpaint);
    decorator.addCan(bluepaint);
    assert.deepStrictEqual(decorator.calculatePaintToRoom(room),true)
  });

  it('should be able to paint room if enough stock', function(){
    decorator.addCan(bluepaint);
    decorator.paintRoom(room)
    assert.deepStrictEqual(room.painted, true)
  })

});
