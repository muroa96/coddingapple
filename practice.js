// var 사람 = {
//   name: '손흥민',
//   sayHi : function() {
//     var n = this.name;
//     console.log(`안녕 나는 ${n}`);
//   }
// }

// 사람.sayHi();

// var 자료 = {
//   data : [1,2,3,4,5]
// }

// var 전부더하기 = function () {
//   var arr = 자료.data;
//   var answer = 0;
//   arr.forEach(function(e) {
//     answer+=e
//   })
//   console.log(answer)
// }

// 전부더하기();

// var 변수 = '손흥민';
// function 해체분석기(문자들, 변수들) {
//   console.log(문자들);
//   console.log(변수들);
// }

// 해체분석기`안녕하세요 ${변수} 입니다.`;

// var pants = 0;
// var socks = 100;
// `바지${pants} 양말${socks}`;

// function 해체(a, b,c) {
//   console.log(a[1],b,a[0],c);
// }
// 해체`바지${pants}양말${socks}`

// function 해체2(문자,변수1,변수2) {
//   if (변수1===0) {
//     console.log(문자[0],'다팔렸어요',문자[1],변수2)
//   } else {
//     console.log(문자[0],변수1,문자[1],변수2)
//   }
// }
// 해체2`바지${pants}양말${socks}`

// var a = [1,2,3];
// var b = [4,5];
// var c = [...a,...b];
// console.log(c);


// function 기계() {
//   this.name='Kim';
//   this.age=15;
// }




// function Product(product, prices) {
//   this.name = product;
//   this.price = prices;
//   this.부가세 = function(){
//     console.log(this.price*0.1)
//   }
// }

// var product1 = new Product('shirts', 50000);
// product1.부가세();

// function 기계() {
//   this.name = 'kim';
//   this.age =15;
// }

// 기계.prototype.gender = '남';
// var 학생1 = new 기계();
// var 학생2 = new 기계();

// console.log(학생1.gender);

// var arr = [1,2,3];
// console.log( arr.toString());

// console.log(Array.prototype);

// function 기계(){
//   this.name = 'Kim';
//   this.age = 15;
// }
// var 학생1 = new 기계();
// console.log(학생1.__proto__);
// console.log(기계.prototype);

function 학생정보(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log('안녕 나는' +this.name +'이야');
  }
}

var 학생1 = new 학생정보('Kim', 20);
학생1.sayHi();


function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)

function Student(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}

Student.prototype.sayHi = function () {
  console.log('안녕 나는 ' + this.name + '이야');
}

var 학생1 = new Student('Kim', 20);
학생1.sayHi();


Array.prototype.remove3 = function () {
  for(var i=0; i< this.length; i++) {
    if (this[i]===3) {
      this.splice(i,1);
    }
  }
};

var arr = [1,2,3];
arr.remove3();


