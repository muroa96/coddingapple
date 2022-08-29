### **JS**

***

### **셀렉터**

document.getElementById('list-group')[0]

document.getElementByClassName('list-group')[0]

document.querySelector('.list-group') : class

document.querySelector('#list-group'): id

querySelector : 1개만 찾아줌

querySelectorAll() : 여러개 찾아줌 [1, 2, 3, ...] ->querySelectorAll()[0]

<br>



### **addEventListener()**



기존 방식 : <button onclick="">

addEventListener() : 이벤트 감지 

document.getElementByID().addEventListener('click', function(){})



callback함수 : 파라미트자리에 들어가는 함수(코드를 순차적으로 실행할 때 쓰임)



class 부착식으로 개발 -> 나중에 애니메이션 추가 쉬움, 재사용 편리

classList.toggle : 클래스리스트 추가/제거



### JQuery
***

$('#ssd') id

$('.hdd') class

jquery는 jquery 전용 문법을 사용해주어야된다.

$('#sd').css('border', '2px solid orange');

$('h1').test('hello world!')



jquery는 여러개 요소 리스트일 경우, 자동으로 다 순회해서 등록해준다.

$('.btn').on('click', function(){});

$('.clss')은 모든 btn 클래스를 다 찾아준다(querySElectorAll처럼)
만약 특정 클래스만 선택하고 싶으면 eq를 쓰면 된다.
$('.class').eq(0).on('click', function(){})

<br>
자주 쓰는(반복적인) 셀렉터는 변수에 넣어서 쓰자.
셀렉터 문법은 작동 시간이 오래 걸리므로, 반복적으로 사용할 경우 변수에 담아서 쓰는 것이 좋다(querySelector도 마찬가지)

### **애니메이션 만들기**

* 애니메이션은 CSS로 처리하는게 관습(처리속도가 더 빠름)

* one-way UI 애니메이션 만드는 방법
  1. 시작 스타일(class)
  2. 애니메이션 동작 후 스타일(class)
  3. 원할때 최종 스타일로 변하라고 코드 짬
  4. transition 추가
* display 대신 visibility: hidden; visible;을 쓰는게 애니메이션에서는 더 좋다.

* transition: all 1s;
* opacity =0;

### **Form**(<form>)

* 서버로 유저정보를 전송하기 위해 쓰임.

* <form action="url~~"> : url로 전송

* addEventListener('submit')
* 폼 전송 막는법 : e.preventDefault()

### **조건문(if else)**

* if (조건) {

  실행값

  } else if {

  실행값}

* else if 문에 참인 경우 뒤에 오는 else if 문은 실행하지 않는다.

* if 문만 있는 경우 참이든 아니든 뒤에 있는 if문도 항상 실행된다.

* 원래 if문 안에 true/false(boolean)를 넣어야 잘 작동함



### **input**

* addEventlistener('input', function(){}) : input에 입력한 값이 바뀔 때 발생
* addEventlistener('change', function(){}) : input에 입력하고 다른 곳을 찍을때(focus를 잃을때) 발생



### **비교연산자**

* == : 같다(1=='1')(true) type이 다르지 않아도 괜찮다.
* === : 엄격한 같다(type도같아야됨)
* 다름 : !=
* if (1) : true if(0) : false
* &&, ||



### **변수(선언, 할당)**

* 선언 : var 나이; let 나이=20; const 나이=10;

* 할당 : 나이=20;

* 변수가 함수 안에 있는 경우 함수 안에서만 사용 가능

* let, const : 재선언 불가, 중괄호 안에 있는 경우 중괄호 안에서만 사용 가능

  ![image-20220810183204010](md-images/image-20220810183204010.png)]



### **setTimeout(), setInterval()**

1. setTimeout(function(){}, 1000) : 1초(1000ms)후 function 실행
2. setInterval(function(){}, 1000) : 1초(1000ms)마다 function 실행



### **정규식**

* /abc/.test('abcabc')  : true
* 정규식 종류
  * /[a-z]/ : a~z(소문자)
  * /[A-Z]/ : A~Z(소문자)
  * /[ㄱ-ㅎ가-힣]/ : 한국어
  * /\S/ : 아무 문자(특수기호도 포함)
  * /^a/ : a라는 기호로 시작하는가
  * /a$/ : a로 끝나는가
  * /a|b/ : a또는 b가 들어가있는가
  * /\S+@\S+\.\S+/ : 이메일 형식 (+는 왼쪽 문자 반복 검색)



2022-08-16



### **캐러셀**

캐러셀: 옆으로 슬라이드 되는 애니메이션



transform: translatex(-100vw);

* 슬라이드 화면이 부드럽게 작동한다.



###  **function **

function (a) {

return a+1

}

* 긴 코드 축약해서 쓸 수 있음
* 파라미터 추가 가능
* return
  * return은 함수 종료 기능도 가지고 있기에, return 밑의 코드는 실행되지 않는다.



### **소수점**

console.log(1.1+0.3)을 하면 1.4가 아니라 1.400000000001이 나온다.

이는 1.1과 0.3을 이진법으로 변환한뒤, 계산을 하기 때문이다. 

이때 이진법으로 바꾼 수는 무한히 길기에 적절히 끊고 반올림해 저장한다. 

이로 인해 소수점 연산의 경우 아주 작은 오차가 발생한다.



이를 해결하기 위해선

1. 덧셈하기 전에 10을 곱한 뒤 덧셈 후 다시 나누든지

2. 위부 라이브러리를 사용하든지

3. 오차를 그냥 반올림 하든지(보통 이렇게 사용)

   console.log((1.1+0. 3).toFixed(1));

   단, 이것은 문자로 처리되기에 변환을 해주어야된다.

   parseFloat('123')

   parseInt('123')



### **JS파일 link됐는지 확인하는 법 **

alert();

코드를 실행시킬 시 홈페이지에 alert창이 제대로 뜬다면 link가 된 것이다.



### **스크롤**

window.addEventListener('scroll', function (){});

$(window).on('scroll', function(){})

스크롤을 내릴 때 마다 function 실행



window.scrollY 

$(window).scrollTop()

스크롤이 얼마큼 내려가는지를 알 수 있음



document.querySelector('.lorem').scrollHeight

div 스크롤의 크기



window.scrollTo(x,y);

강제로 (x,y)좌표로 스크롤



window.scrollBy(x,y);

$(window).scrollTop(x,y);

현재 위치에서 (x,y)만큼 스크롤



overflow-y: scroll

안에 내용이 넘치면 자동으로 스크롤바 생성



스크롤 다룰 때 주의 사항

1. 스크롤이벤트리스너 안의 코드는 1초에 60번 이상 실행됩니다. 

   그래서 스크롤 이벤트리스너는 많이 달면 성능저하가 일어나니 스크롤바 1개마다 1개만 씁시다. 

 

2. 스크롤이벤트리스너 안의 코드는 1초에 여러번 실행되다보니 바닥체크하는 코드도 여러번 실행될 수 있습니다. 

   숙제2에서 alert가 2번 뜨고 그럴 수 있다는 뜻입니다.

   그걸 방지하고 싶으면 구글에 검색해보는 것도 나쁘지않습니다. 변수같은걸 활용하면 됩니다. 



scrollTop : 현재 웹페이지 스크롤양

scrollHeight: 현재 웹페이지 실제 높이

clientHeight: 현재 웹페이지 보이는 높이

### **반복문**
for (let i=0; i<3; i++){
  console.log('하이요')
}
반복문의 경우 변수 지정을 무조건 let으로 하는것이 좋다.

### **length**
document.getElementsByClassName('.class).length
$(.'class').length

### **CSS**

***

### **rem**

* css단위
* 1rem = 16px



position: fixed;

* 위치 상단 고정



z-index: 5; 

* 앞으로 보내기



### **이벤트 버블링**
어떤 HTML 태그에 이벤트가 발생하면 그 모든 상위요소까지 이벤트가 실행되는 현상
다음과 같이 해결

document.querySelector('.class').addEventListener('click', function(e) {
  e.target;
  e.currentTarget;
  e.preventDefault();
  e.stopPropagation();
})

e.target : 실제 클릭한 요소 알려줌(이벤트 발생한 곳)
e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌(this랑 같음)
e.preventDefault() : 이벤트 기본 동작을 막아줌
e.stopPropagation() : 상위요소로의 이벤트 버블링을 중단해줌

### **dataset**
dataset을 통해 html 안에 몰래 정보를 숨겨높을 수 있다.

<div data-데이터이름="값"></div> 

값을 출력하는 방법은 다음과 같다.
document.querySelector('.tab-button').dataset.데이터이름

### **this**
1. 그냥 쓰거나 일반 함수 안에서 쓰면 {window}
2. 오브젝트 내 함수 안에서 쓰면 그 함수를 가지고 있는 오브젝트 의미
3. 기계 안에서 쓰면 새로 생성되는 오브젝트(instance),(this.이름)


함수나 변수를 전역공간에서 만들면 {window}에서 보관한다.
* window : global object

