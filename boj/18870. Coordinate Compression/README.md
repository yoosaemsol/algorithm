## [18870. Coordinate Compression](https://www.acmicpc.net/problem/18870)

**Problem**

There are N coordinates X1, X2, ..., XN on a number line. Coordinate compression is to be applied to these coordinates.

The value X'i after compressing the coordinate Xi should be equal to the number of distinct coordinates Xj such that Xi > Xj.

Apply coordinate compression to X1, X2, ..., XN, and output the results X'1, X'2, ..., X'N.

**Input**

- The first line contains N.
- The second line contains N integers separated by a single space, representing X1, X2, ..., XN.

**Output**

- Print X'1, X'2, ..., X'N separated by a single space.

**Constraints**

- 1 ≤ N ≤ 1,000,000
- -10^9 ≤ Xi ≤ 10^9

<br/>
<br/>

**Example Input 1**

```
5
2 4 -10 4 -9
```

**Example Output 1**

```
2 3 0 3 1
```

**Example Input 2**

```
6
1000 999 1000 999 1000 999
```

**Example Output 2**

```
1 0 1 0 1 0
```

<hr/>

## [18870. 좌표 압축](https://www.acmicpc.net/problem/18870)

**문제**

수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

**입력**

- 첫째 줄에 N이 주어진다.
- 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

**출력**

- 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

**제한**

- 1 ≤ N ≤ 1,000,000
- -10^9 ≤ Xi ≤ 10^9

<br/>
<br/>

**예제 입력 1**

```
5
2 4 -10 4 -9
```

**예제 출력 1**

```
2 3 0 3 1
```

**예제 입력 2**

```
6
1000 999 1000 999 1000 999
```

**예제 출력 2**

```
1 0 1 0 1 0
```
