 iterable 
멤버를 차례로 반환 할 수 있는 객체



	// 배열버퍼 (ArrayBuffer)
	let buffer = new ArrayBuffer(80);	// 80바이트 640비트
	let view = new DataView(buffer);
	view.setInt32(8, 22, false);  // 저장바이트, 저장 할 수, endian 플래그(false 는 big endian)
	var number = view.getInt32(8, false);
	console.log(number);  // 22



	// 타입화 배열 (typed array)
	var buffer = new ArrayBuffer(80); // 80바이트 640비트
	var typed_array = new Float64Array(buffer);
	typed_array[4] = 11;
	
	console.log(typed_array.length);  // 64비트로 만들었기 때문에 10
	console.log(typed_array[4]);      // 11


	// 세트 (set)
	let set = new Set("안녕하세요!!!");  // 뒤쪽 !! 는 삭제
	set.add(12);
	console.log(...set);              // 안 녕 하 세 요 ! 12
	console.log(set.has("!"));        // true
	console.log(set.size);            // 7
	
	set.delete(12);                   // // 안 녕 하 세 요 !
	console.log(...set);
	
	set.clear();
