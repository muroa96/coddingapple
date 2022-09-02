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

var 변수 = '손흥민';
function 해체분석기(문자들, 변수들) {
  console.log(문자들);
  console.log(변수들);
}

해체분석기`안녕하세요 ${변수} 입니다.`;

var pants = 0;
var socks = 100;
`바지${pants} 양말${socks}`;

function 해체(a, b,c) {
  console.log(a[1],b,a[0],c);
}
해체`바지${pants}양말${socks}`

function 해체2(문자,변수1,변수2) {
  if (변수1===0) {
    console.log(문자[0],'다팔렸어요',문자[1],변수2)
  } else {
    console.log(문자[0],변수1,문자[1],변수2)
  }
}
해체2`바지${pants}양말${socks}`

var a = [1,2,3];
var b = [4,5];
var c = [...a,...b];
console.log(c);