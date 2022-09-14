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

class 부모 {
  constructor() {
    this.name= 'Kim';
    this.sayHi = function(){console.log()}
  }
}

var 자식 = new 부모();

function 쇼핑몰(na, pr) {
  this.name= na;
  this.price = pr
  this.부가세 = function() {{
    console.log(this.price*0.1)
  }}
}

var product1 = new 쇼핑몰('shirts', 50000);
var product2 = new 쇼핑몰('pants', 60000);

console.log(product1);
console.log(product2);
product1.부가세();


function 기계(){
  this.name = 'Kim';
  this.age = 15;
}
var 학생1 = new 기계();
var 학생2 = new 기계();

console.log(기계.prototype);

function Parent() {
  this.name= 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name);

function Student(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}

Array.prototype.remove3 = function () {
  for (var i = 0; i<this.length; i++) {
    if (this[i]===3) {
      this.splice(i,1);
    }
  }
 };
var arr = [1,2,3];
arr.remove3();


class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}

class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
}

var 테1 = new 아버지();
console.log(아버지.prototype);


class 강아지 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

var 강아지1 = new 강아지('말티즈', 'white');
console.log(강아지1);

class 고양이 extends 강아지 {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

var 고양이1 = new 고양이('코숏', 'white', 5);
console.log(고양이1);

