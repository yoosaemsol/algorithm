## [16953. A → B](https://www.acmicpc.net/problem/16953)

**Problem**

You want to convert integer A to B. There are two possible operations:

- Multiply by 2.
- Append 1 to the rightmost digit of the number.

Find the minimum number of operations needed to convert A to B.

**Input**

- The first line contains two integers A and B (1 ≤ A < B ≤ 10^9).

**Output**

- Print the minimum number of operations needed to convert A to B plus 1. If it's impossible to make the conversion, print -1.

<br/>
<br/>

**Example Input 1**

```
2 162
```

**Example Output 1**

```
5
```

**Example Input 2**

```
4 42
```

**Example Output 2**

```
-1
```

**Example Input 3**

```
100 40021
```

**Example Output 3**

```
5
```

<hr/>

## [16953. A → B](https://www.acmicpc.net/problem/16953)

**문제**

정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

- 2를 곱한다.
- 1을 수의 가장 오른쪽에 추가한다.

A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

<br/>

**입력**

- 첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

**출력**

- A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
2 162
```

**예제 출력 1**

```
5
```

**예제 입력 2**

```
4 42
```

**예제 출력 2**

```
-1
```

**예제 입력 3**

```
100 40021
```

**예제 출력 3**

```
5
```
