### Dictionary

소스 실행방법 파일 형태로 실행하신다면 `#-*- coding: utf-8 -*-`를 최상단에 넣어 주세요.



#### 기본 사용방법

기본적으로 `key: value` 형태로 요소를 선언합니다.

```python
d = {'a': 0, 'b': 1, 'c': 2}
d['a']
d['b'] = 1024
d['c']
len(d)				# 컬렉션의 크기를 반환합니다.
d					# {'a': 0, 'c': 2, 'b': 1024}
del d['c']          # 요소를 삭제합니다.
d                   # {'a': 0, 'b': 1024}
d.get('b')          # 1024
# d['z']              # KeyError: 'z'
d.get('z')          # 요소가 없어도 에러가 발생하지 않습니다.
```



#### 키의 요건

키는 불변(immutable) 값이어야 합니다. 대부분의 자료형은 키로 가능합니다.

```python
data['k'] = 'my key'
data[2] = 7
data[('a', 'b', 'c')] = 'tuple key'             # 튜플도 키가 될 수 있습니다.
```

함수도 값으로 가능합니다.

```python
def add(a, b):
    return a+b

def sub(a, b):
    return a-b

action = {0: add, 1: sub}
action[0](4, 5)
action[1](4, 5)
```

해시(hash) 타입이 아닌 객체는 키가 될 수 없습니다.

```python
data[['a', 'b', 'c']] = 'list key'        # TypeError: unhashable type: 'list'
data[{'a', 'b', 'c'}] = 'dictionary key'  # TypeError: unhashable type: 'set'
```

hashable 타입의 객체인지는 객체의 `__hash__` 속성으로 확인 가능합니다.

```python
'str'.__hash__
('a', 'b', 'c').__hash__	# None
['a', 'b', 'c'].__hash__	# None
```



#### dict 메서드 사용

dict 메서드를 사용해서 딕셔너리를 생성합니다. 3가지 방법모두 같은 결과를 반환합니다.

```python
dict(a=1, b=2)                    # {'a': 2, 'b': 1}
dict([('a', 1), ('b', 2)])        # {'a': 2, 'b': 1}
dict({'a': 1, 'b': 2})            # {'a': 2, 'b': 1}
```



##### 시퀀스 자료형 키와 값을 합성하여 딕셔너리를 생성하는 방법

```python
keys = ['a', 'b', 'c']
values = (1, 2, 3)        # 튜플, 리스트 모두 사용가능
zip(keys, values)         # keys와 values를 합한 튜플 리스트 반환 [('one', 1), ('two', 2), ('three', 3)]
dict(zip(keys, values))   # 새로운 딕셔너리 생성 {'three': 3, 'two': 2, 'one': 1}
```



#### 다양한 딕셔너리 메서드

```python
d = {'a': 0, 'b': 1}
d.keys()      # 키 리스트를 반환	['a', 'b']
d.values()    # 값 리스트를 반환	[0, 1]
d.items()     # 키, 값형태의 리스트를 반환		[('a', 0), ('b', 1)]
'a' in d      # 딕셔너리의 요소 포함 여부를 반환합니다.	True
```



##### copy메서드로 새로운 객체 생성

```python
d = {'a': 0, 'b': 1}
ref = d             # 레퍼런스 복사
copy = d.copy()     # 사전 복사, 별도의 사전 객체 생성성
d['a'] = 9
d['c'] = 8
d                   # {'a': 9, 'c': 8, 'b': 1}
ref                 # {'a': 9, 'c': 8, 'b': 1}
copy                # 새로운 딕셔너리 객체 {'a': 1234, 'b': 1}
```

get 메서드에 ('x', 3) 두번째 인자를 넣어주면 x 가 없을 경우 3을 반환합니다.

setdefault 로 값을 지정해주면 키가 없을 경우 새로운 키를 딕셔너리에 넣고 값을 설정합니다.

popitem 메서드는 처음 아이템을 꺼내고 딕셔너리에서 삭제합니다.

pop메서드는 지정된 값을 꺼내고 딕셔너리에서 삭제합니다.


```python
d = {'a': 0, 'b': 1}
d.get('a')
d.get('e')        # 값이 없을 경우 None 리턴
d.get('x', 3)     # x 가 없는 경우 3을 리턴한다.

d.setdefault('z', 99)       # 'z' 키가 없다면 99로 저장 {'a': 0, 'b': 1, 'z': 99}
d.popitem()                 # 'a' 아이템을 꺼낸다. {'b': 1, 'z': 99}
d.pop('b')                  # 'b' {'z': 99}
```

update 메서드를 통해 딕셔너리 속에 다른 딕셔너리(컬렉션)를 추가하는것이 가능합니다.

clear 를 하게 되면 딕셔너리가 초기화 됩니다. {}

```python
items = {'a': 0, 'b': 1}
new_items = {'test': 1234}
new_items.update(items)	    # new_items에 items 가 추가 됩니다.
new_items                   # {'test': 1234, 'a': 0, 'b': 1}
items.clear()
```



#### 전역/지역 심볼 데이터

```python
a = 1
b = 100
name = 'jamie'
dic = {'a': 'Good', 'b': 'Not Good'}
print globals()     # 심볼데이터(딕셔너리) 전체를 얻습니다.
print locals()      # 심볼데이터(딕셔너리) 전체를 얻습니다. globals()와 큰차이가 없습니다.
```

	{'a': 1, 'b': 100, 'name': 'jamie', '__builtins__': <module '__builtin__' (built-in)>, '__file__': '/Users/jamie/Documents/temp_workspace/python/test.py', '__package__': None, '__name__': '__main__', 'dic': {'a': 'Good', 'b': 'Not Good'}, '__doc__': None}


##### 함수 내부의 심볼 데이터 조회

```python
def f():
    pass

f.a = 1
f.b = 2
print f.__dict__    # {'a': 1, 'b': 2}
```



#### 반복문을 사용한 딕셔너리 순회 방법

```python
D = {'a': 1, 'b': 2, 'c': 3}
for key in D.keys():
    print key, D[key]

for key in D:
    print key, D[key]

for key, value in D.items():
    print key, value
```



#### 딕셔너리 정렬

##### 키 정렬

```python
d = {'b': 2, 'c': 3, 'a': 1}
items = d.items()
items.sort()    # 알파벳 순서로 정렬
print items     # [('a', 1), ('b', 2), ('c', 3)]
```



##### 값 정렬

```python
d = {'three': 3, 'two': 2, 'one': 1}
items = d.items()
items.sort(key=lambda item: item[1])
print items     # [('one', 1), ('two', 2), ('three', 3)]
```



##### for in 루프에 sorted 메서드를 사용한 정렬

```python
d = {'three': 3, 'two': 2, 'one': 1}
for key, value in sorted(d.items(), key=lambda item: item[1]):
    print key, value
    
# one 1
# two 2
# three 3
```



#### Reference

1. [열혈강의 파이썬](http://www.yes24.com/24/goods/1783933?scode=032&OzSrank=1)