2022-08-10



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

$('#ssd') id

$('.hdd') class

jquery는 jquery 전용 문법을 사용해주어야된다.

$('#sd').css('border', '2px solid orange');

$('h1').test('hello world!')



jquery는 여러개 요소 리스트일 경우, 자동으로 다 순회해서 등록해준다.

$('.btn').on('click', function(){});



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
  * 