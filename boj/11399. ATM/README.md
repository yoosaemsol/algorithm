## [11399. ATM](https://www.acmicpc.net/problem/11399)

**Problem**

There is only one ATM at Inha Bank. Currently, N people are waiting in line at the ATM. Each person is assigned a number from 1 to N, and the time it takes for the i-th person to withdraw money is Pi minutes.

Depending on the order in which people line up, the total time required for withdrawing money varies. For example, consider the case where there are a total of 5 people, and P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 = 2. If people line up in order [1, 2, 3, 4, 5], the first person can withdraw money in 3 minutes. The second person will have to wait until the first person finishes, so it will take 3 + 1 = 4 minutes. The third person will have to wait until the first and second person finish, so a total of 3 + 1 + 4 = 8 minutes are required. The fourth person will have to wait until the first, second, and third person finish, so it will take 3 + 1 + 4 + 3 = 11 minutes. The fifth person will have to wait until the first, second, third, and fourth person finish, so it will take 3 + 1 + 4 + 3 + 2 = 13 minutes. In this case, the total time required for each person to withdraw money is 3 + 4 + 8 + 11 + 13 = 39 minutes.

If people line up in order [2, 5, 1, 4, 3], the second person can withdraw money in 1 minute, the fifth person can withdraw money in 1 + 2 = 3 minutes, the first person can withdraw money in 1 + 2 + 3 = 6 minutes, the fourth person can withdraw money in 1 + 2 + 3 + 3 = 9 minutes, and the third person can withdraw money in 1 + 2 + 3 + 3 + 4 = 13 minutes. The total time required for each person to withdraw money is 1 + 3 + 6 + 9 + 13 = 32 minutes. There is no way to minimize the total time required further.

When the number of people in line N and the time it takes for each person to withdraw money Pi are given, write a program to find the minimum total time required for each person to withdraw money.

**Input**

- The first line contains the number of people N (1 ≤ N ≤ 1,000). The second line contains the time it takes for each person to withdraw money, Pi. (1 ≤ Pi ≤ 1,000)

**Output**

- Print the minimum total time required for each person to withdraw money on the first line.

<br/>
<br/>

**Example Input 1**

```
5
3 1 4 3 2
```

**Example Output 1**

```
32
```

<hr/>

## [11399. ATM](https://www.acmicpc.net/problem/11399)

**문제**

인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다. 사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다.

사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다. 예를 들어, 총 5명이 있고, P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 = 2 인 경우를 생각해보자. [1, 2, 3, 4, 5] 순서로 줄을 선다면, 1번 사람은 3분만에 돈을 뽑을 수 있다. 2번 사람은 1번 사람이 돈을 뽑을 때 까지 기다려야 하기 때문에, 3+1 = 4분이 걸리게 된다. 3번 사람은 1번, 2번 사람이 돈을 뽑을 때까지 기다려야 하기 때문에, 총 3+1+4 = 8분이 필요하게 된다. 4번 사람은 3+1+4+3 = 11분, 5번 사람은 3+1+4+3+2 = 13분이 걸리게 된다. 이 경우에 각 사람이 돈을 인출하는데 필요한 시간의 합은 3+4+8+11+13 = 39분이 된다.

줄을 [2, 5, 1, 4, 3] 순서로 줄을 서면, 2번 사람은 1분만에, 5번 사람은 1+2 = 3분, 1번 사람은 1+2+3 = 6분, 4번 사람은 1+2+3+3 = 9분, 3번 사람은 1+2+3+3+4 = 13분이 걸리게 된다. 각 사람이 돈을 인출하는데 필요한 시간의 합은 1+3+6+9+13 = 32분이다. 이 방법보다 더 필요한 시간의 합을 최소로 만들 수는 없다.

줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

**입력**

- 첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어진다. (1 ≤ Pi ≤ 1,000)

**출력**

- 첫째 줄에 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
5
3 1 4 3 2
```

**예제 출력 1**

```
32
```
