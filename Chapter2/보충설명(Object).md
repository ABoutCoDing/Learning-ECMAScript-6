__proto__ 프로퍼티

    // ES5 이전
    var x = {x: 12};
    var y = Object.create(x, {y: {value: 13}});	// value는  키워드
    
    console.log(y.x);
    console.log(y.y);
    
    // ES6 이후  
    let a = {a: 12, __proto__: {b: 13}};
    console.log(a.a);
    console.log(a.b);

Enumerable : 해당 프로퍼티가 Enum으로서 사용될 수 있는가에 대한 여부를 지정한다.



Object.assign(targetObj, sourceObjs...) 메소드

	let x = {x: 12};
	let y = {y: 13, __proto__: x};
	let z = {z: 14,  b() {return 2;}, q: {}};
	
	Object.defineProperty(z, "z", {enumerable: false});
	
	let m = {};
	
	Object.assign(m, y, z); 	// 소스의 setter, getter를 호출한다.
	
	console.log(m.y);
	console.log(m.z);   		// enumerable 이 false라 접근이 불가능하다.
	console.log(m.b);
	console.log(m.x);   		// undefined, [[prototype]] 프로퍼티는 복사하지 않는다.
	console.log(m.q == z.q);	// true
