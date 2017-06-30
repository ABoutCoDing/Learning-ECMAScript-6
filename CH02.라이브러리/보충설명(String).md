http://ujinbot.blogspot.kr/2013/10/blog-post.html

https://mathiasbynens.be/notes/javascript-escapes#unicode-code-point



codePointAt(index) Method

모든 UTF-16 문자에 대한 아스트랄 코드 포인트(16 진수 값이 4 개 이상인 코드 포인트)를 비롯한 코드 포인트 값을 반환합니다.

index가 0 보다 작거나 문자열의 크기보다 큰 경우 반환 값은 undefined입니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

    console.log("\uD83D\uDE91".codePointAt(1));
    console.log("\u{1F691}".codePointAt(1));
    console.log("hello".codePointAt(2));




