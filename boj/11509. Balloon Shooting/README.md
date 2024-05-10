## [11509. Balloon Shooting](https://www.acmicpc.net/problem/11509)

**Problem**

There are N balloons floating in a large room. The balloons are arranged in a row from left to right. Jinsol likes playing with arrows and practicing archery. She shoots arrows from left to right. She can choose the height at which to shoot the arrow. The arrow moves from left to right until it encounters a balloon. When the arrow meets a balloon at height H, the balloon pops and disappears. The arrow continues its path, decreasing its height by 1 after hitting a balloon. Therefore, if the arrow was moving at height H, after popping a balloon, its height becomes H-1.

Our goal is to pop all the balloons using as few arrows as possible.

**Input**

- The first line contains an integer N (1 ≤ N ≤ 1,000,000), the number of balloons.
- The second line contains an array Hi of N integers.
- Each Hi (1 ≤ Hi ≤ 1,000,000) represents the height of the i-th balloon in the order from left to right.

**Output**

- Print on a single line the minimum number of arrows needed.

<br/>
<br/>

**Example Input 1**

```
5
2 1 5 4 3
```

**Example Output 1**

```
2
```

**Example Input 2**

```
5
1 2 3 4 5
```

**Example Output 2**

```
5
```

**Example Input 3**

```
5
4 5 2 1 4
```

**Example Output 3**

```
3
```

<hr/>

## [11509. 풍선 맞추기](https://www.acmicpc.net/problem/11509)

**문제**

큰 방에 N개의 풍선이 떠있다. 풍선들은 왼쪽부터 오른쪽까지 일렬로 있다. 진솔이는 화살 가지고 노는 것과 사냥 연습하는 것을 좋아한다. 진솔이는 화살을 왼쪽에서 오른쪽으로 쏜다. 높이는 임의로 선택한다. 화살은 선택된 높이 H에서 풍선을 마주칠 때까지 왼쪽에서 오른쪽으로 이동한다. 화살이 풍선을 마주치는 순간, 풍선은 터지고 사라진다. 화살은 계속해서 가던길을 가는데 높이는 1 줄어든다. 그러므로 만약 화살이 높이 H에서 이동 중이었다면 풍선을 터트린 후에는 높이가 H-1이 된다.

우리의 목표는 모든 풍선을 터트리되 가능한한 적은 화살을 사용하는 것이다.

<br/>

**입력**

- 첫 번째 줄에는 정수 N(1 ≤ N ≤ 1 000 000)이 들어온다.
- 두 번째 줄에는 배열 Hi가 N개 들어온다.
- 각각의 Hi(1 ≤ Hi ≤ 1 000 000)는 i번째 풍선의 높이에 해당하며 왼쪽에서 오른쪽으로 나열되는 순서이다.

**출력**

- 첫 번째 줄 한줄에 최소한 필요한 화살의 개수를 출력한다.

<br/>
<br/>

**예제 입력 1**

```
5
2 1 5 4 3
```

**예제 출력 1**

```
2
```

**예제 입력 2**

```
5
1 2 3 4 5
```

**예제 출력 2**

```
5
```

**예제 입력 3**

```
5
4 5 2 1 4
```

**예제 출력 3**

```
3
```
