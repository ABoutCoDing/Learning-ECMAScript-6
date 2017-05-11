# ES6 

스터디에서 설명이 부족했던 부분을 작성합니다.

## Number

##### Number.isSafeInteger(number) Method

기본적으로 자바스크립트의 숫자는 -(2^53 - 1) 부터  +(2^53-1) 숫자로 표현하면 -9007199254740991부터 9007199254740991 로 저장됩니다. (Safe Integer)

    Number.MAX_SAFE_INTEGER // 9007199254740991
    Math.pow(2, 53) - 1	// 9007199254740991

Number.isSafeInteger(*number*) 메소드는 숫자들이 Safe Integer 범위내에 있는지 확인합니다.

	Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2	// true

예제를 보면 둘다 Safe Intefer 범위를 벗어나기 때문에 true가 반환됩니다.

    console.log(Number.isSafeInteger(156));	// true
    console.log(Number.isSafeInteger('1212'));	// false
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));	// true
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));	// false
    console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));	// true
    console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));	// false	



#####  Number.EPSILON Property

자바스크립트의 부동 소수점 연산은 0.1 같은 실수를 이진 부동 소수점(floating point) 방식으로 표현합니다.

    console.log(0.1 + 0.2 == 0.3);	// false
    console.log(0.9 - 0.8 == 0.1);	// false
    console.log(0.1 + 0.2);	// 0.30000000000000004
    console.log(0.9 - 0.8);	// 0.09999999999999998
0.1 + 0.2 == 0.3 이 false 입니다.  결과가 조금 당황스럽지 않으신가요? 
자바스크립트에서는 0.1 + 0.2 연산은 0.3으로 저장되지 않고 0.30000000000000004 의 부동 소수점 형태로 저장됩니다.
이러한 오차 문제를 해결 하기 위해 자바스크립트에서는 에러 한계치(margin of error) 값을 저장하고 있습니다. 이 프로퍼티가 Number.EPSILON 입니다.

	console.log(Number.EPSILON);	//2.220446049250313e-16

Number.EPSILON은 2^-52 (2의 -52승) 의 아주 작은 숫자를 나타냅니다. 두 수의 차이(-)가 Number.EPSILON 보다 작다면 같다라고 판단 할 수 있습니다. 

    console.log(0.1 + 0.2 == 0.3);	// false
    console.log((0.1 + 0.2) - 0.3 < Number.EPSILON);	// true

부동 소수점이나 반올림 문제에 관해 궁금하신 분들은 [부동소수점 타입 표현의 한계](http://dmrl.kangwon.ac.kr/lecture/1501/programming/Data/%EB%B6%80%EB%8F%99%EC%86%8C%EC%88%98%EC%A0%90_%ED%83%80%EC%9E%85_%ED%91%9C%ED%98%84_%ED%95%9C%EA%B3%84.html)를 참고하세요.



## 수학연산

##### 삼각 연산
	console.log(Math.sinh(0)); // 하이퍼볼릭 사인값
	console.log(Math.cosh(0)); // 하이퍼볼릭 코사인 값
	console.log(Math.tanh(0)); // 하이퍼볼릭 탄젠트 값
	console.log(Math.asinh(0)); // 역 하이퍼볼릭 사인 값
	console.log(Math.acosh(1)); // 역 하이퍼볼릭 코사인 값
	console.log(Math.atanh(0)); // 역 하이퍼볼릭 탄젠트 값
	console.log(Math.hypot(2, 2, 1)); // 피타고라스 정리

하이퍼볼릭시리즈(hyperbolic)는 삼각함수에서 유추된 쌍곡선함수들 입니다.

하이퍼볼릭 시리즈의 자세한 내용은 [위키피디아의 하이퍼볼릭 사인](https://ko.wikipedia.org/wiki/%EC%8C%8D%EA%B3%A1%EC%84%A0%ED%95%A8%EC%88%98) 에서 확인하시기 바랍니다. 



##### 산술 연산

	console.log(Math.log2(16)) ; // 2를 밑으로한로그
	console.log(Math.log10(1000)); // 10을 밑으로한로그
	console.log(Math.log1p(0)); // log(1 + value) 와 동일
	console.log(Math.expm1(0)); // Math.log1p(0)의 역
	console.log(Math.cbrt(8));  // 세제곱근 값

로그함수에 대한 자세한 [로그 함수](https://namu.wiki/w/%EB%A1%9C%EA%B7%B8%ED%95%A8%EC%88%98)를 확인해주세요.



##### Math.emul(number1, number2)  Method

자바스크립트는 기본적으로 64비트 배열정밀도(double-precision) 정수형태로 숫자입니다.

32비트 곱셈을 사용하면 C언어의 32비트 연산 처럼 32비트 레지스터를 이용한 빠른 연산을 수행합니다.
자바스크립트에서 32비트 곱셈을 수행하는 방법으로는 유일 합니다. `32비트로 결과를 리턴합니다.`

	console.log(Math.imul(5, 3)); //32비트 정수 곱셈
	console.log(Math.imul(590, 5000000)); // 32비트 정수 곱셈
	console.log(590 * 5000000)  // 기본 자바스크립트 부동 소수점 곱셈

기본적인 곱셈과 결과는 같지만 32비트를 넘는 결과 값이라면 하위 비트가 소실 됩니다.

	15
	-1344967296	// 하위비트 소실
	2950000000



##### Math.clz32(number) Method

인자를 32비트(이진수)로 변환한 후 값이 셋팅되지 않은 앞쪽 0비트의 수를 리턴합니다.
(전치 제로 비트 : leading zero bit) 반환

    console.log(Math.clz32(7));
    console.log(Math.clz32(1000));
    console.log(Math.clz32(295000000));	

결과는 다음 과 같습니다. (22의 경우만 적어놨습니다.)
    29
    22	// 0000 0000 0000 0000 0000 0011 1110 1000
    3		
