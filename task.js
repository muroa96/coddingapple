// Q1
function 삼육구게임(num) {
  if (num%3==0){
    console.log('박수')
  } else {
    console.log('통과')
  }
}

// Q2
function Q2(num) {
  if (num%9==0) {
    console.log('박수X2')
  } else if (num%3==0) {
    console.log('박수')
  } else{
    console.log('통과')
  }
}

// Q3
function 합격했냐(x,y){
  if (x<40 || y<40) {
    console.log('불합격')
  } else if (x+y>=120) {
    console.log('합격')
  } else {
    console.log('불합격')
  }
}

// 응용1
function 삼육구(nums) {
  let li = ['3','6','9'];
  console.log(String(nums).substr(-1));
  if (String(nums).substr(-1) in li) {
    console.log('박수');
  } else {
    console.log('통과');
  }
}

삼육구(13);
