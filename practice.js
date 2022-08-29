var 사람 = {
  name: '손흥민',
  sayHi : function() {
    var n = this.name;
    console.log(`안녕 나는 ${n}`);
  }
}

사람.sayHi();

var 자료 = {
  data : [1,2,3,4,5]
}

var 전부더하기 = function () {
  var arr = 자료.data;
  var answer = 0;
  arr.forEach(function(e) {
    answer+=e
  })
  console.log(answer)
}

전부더하기();

