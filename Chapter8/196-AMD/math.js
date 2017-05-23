define(function() {
  var sum = function(x, y) {
    return x + y;
  }
  var sub = function(x, y) {
    return x - y;
  }
  var math = {
    findSum: function(a, b) {
      return sum(a, b);
    },
    findSub: function(a, b) {
      return sub(a, b);
    }
  }
  return math;
});
