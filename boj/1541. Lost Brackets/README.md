## [1541. Lost Brackets](https://www.acmicpc.net/problem/1541)

**Problem**

Sejun created an expression with positive integers, +, -, and parentheses. Then, he removed all the parentheses.

Now, Sejun wants to minimize the value of this expression by placing parentheses appropriately.

Write a program to minimize the value of this expression by placing parentheses appropriately.

**Input**

- The expression is given on the first line. The expression consists of '0'~'9', '+', and '-', and the first and last characters are numbers. Also, there are no consecutive sequences of two or more operators, and there are no sequences of numbers longer than 5 digits. Numbers can start with 0. The length of the expression given as input is less than or equal to 50.

**Output**

- Print the answer on the first line.

<br/>
<br/>

**Example Input 1**

```
55-50+40
```

**Example Output 1**

```
-35
```

**Example Input 2**

```
10+20+30+40
```

**Example Output 2**

```
100
```

**Example Input 3**

```
00009-00009
```

**Example Output 3**

```
0
```

<hr/>

## [1541. 잃어버린 괄호](https://www.acmicpc.net/problem/1541)

**문제**

세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.

그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.

괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

**입력**

- 첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다. 그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다. 입력으로 주어지는 식의 길이는 50보다 작거나 같다.

**출력**

- 첫째 줄에 정답을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
55-50+40
```

**예제 출력 1**

```
-35
```

**예제 입력 2**

```
10+20+30+40
```

**예제 출력 2**

```
100
```

**예제 입력 3**

```
00009-00009
```

**예제 출력 3**

```
0
```
