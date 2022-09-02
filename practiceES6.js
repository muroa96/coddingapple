//rest parameters
function 함수(...arg) {
  for (var i=0; i<arg.length; i++) {
    console.log(arg[i])
  }
}

함수 (2,3,4);


function 함수2(...p) {
  console.log(p);
}

함수2 (1,2,3,4,5,6);

function 함수3(...args) {
  args.forEach((e)=> {
    console.log(e)
  });
}

함수3(1,2,3,5,6)


// spread, rest 연습문제

var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);

var a = [1,2,3];
var b = ['you','are'];
var c = function(a,b){
  console.log([[...a], ...[...b]][1])
}
c(a,b);

function 함수(a=5, b=a*2) {
  console.log(a+b);
  return 10
}
함수 (3);

function 함수(a=5, b=a*2) {
  console.log(a+b);
}

함수(undefined, undefined);

function 어레이(...args) {
  return args
}
var newArray = 어레이(1,2,3,4,5);
console.log(newArray);


var numbers = [2,3,4,5,6,1,3,2,5,5,5,4,6,7];
console.log(Math.max(...numbers))

function 정렬 (e) {
  console.log(...[...e].sort())
}
정렬('bear');


function 글자세기(e) {
  var dic = {};
  var arr = [...e].sort();
  dic[arr[0]] = 1;
  for (var i = 1; i<arr.length; i++) {
    if (arr[i]==arr[i-1]) {
      dic[arr[i]]+=1} else {
        dic[arr[i]]=1
      }
  }
  console.log(dic)
}
글자세기('aacbbb');
