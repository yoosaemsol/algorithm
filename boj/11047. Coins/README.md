## [11047. Coins](https://www.acmicpc.net/problem/11047)

**Problem**

Jun-gyu has a total of N types of coins, and he has a large number of each coin.

He wants to make the sum of their values equal to K using the coins. Write a program to find the minimum number of coins needed to make the sum equal to K.

**Input**

- The first line contains N and K. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
- From the second line to the Nth line, each line contains the value of a coin, Ai, given in ascending order. (1 ≤ Ai ≤ 1,000,000, A1 = 1, Ai is a multiple of Ai-1 for i ≥ 2)

**Output**

- Print the minimum number of coins needed to make the sum equal to K on the first line.

<br/>
<br/>

**Example Input 1**

```
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
```

**Example Output 1**

```
6
```

**Example Input 2**

```
10 4790
1
5
10
50
100
500
1000
5000
10000
50000
```

**Example Output 2**

```
12
```

<hr/>

## [11047. 동전](https://www.acmicpc.net/problem/11047)

**문제**

준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

**입력**

- 첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
- 둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)

**출력**

- 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
```

**예제 출력 1**

```
6
```

**예제 입력 2**

```
10 4790
1
5
10
50
100
500
1000
5000
10000
50000
```

**예제 출력 2**

```
12
```
