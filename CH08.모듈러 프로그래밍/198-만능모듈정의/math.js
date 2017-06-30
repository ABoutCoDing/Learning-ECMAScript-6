// 만능 모듈 정의
(function (root, factory) {
  // 환경파악
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  // 모듈정의
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
}));
