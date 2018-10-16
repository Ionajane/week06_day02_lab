
const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addCan = function (can) {
  this.stock.push(can);
};

Decorator.prototype.calculateLitres = function () {
  var total = 0;
  for (paint of this.stock) {
    total += paint.litres
  };
  return total;
};

Decorator.prototype.calculatePaintToRoom = function (room) {
  var amount = (this.calculateLitres()/4);
  if (amount >= room.area){
    return true
  }
  else {
    return false
  };
};

Decorator.prototype.paintRoom = function (room) {
  if (this.calculatePaintToRoom(room) == true){
    room.painted = true;
  };

};

// 4l to 1sq room
module.exports = Decorator;
