## [3052. **Remainders**](https://www.acmicpc.net/problem/3052)

**Problem**

Given two natural numbers A and B, A%B represents the remainder when A is divided by B. For example, the remainders when 7, 14, 27, and 38 are divided by 3 are 1, 2, 0, and 2, respectively.

After receiving ten numbers as input, find the remainder when each of them is divided by 42. Then, determine how many distinct remainders there are and output that count.

<br/>

**Input**

- Ten numbers are given, one on each line. These numbers are non-negative integers less than or equal to 1,000.

**Output**

- Output the number of distinct remainders when dividing each number by 42.

<br/>

**Example Input 1**

```
1
2
3
4
5
6
7
8
9
10
```

**Example Output 1**

```
10
```

The remainders when dividing each number by 42 are 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10, which are all distinct.

<br/>

**Example Input 2**

```
42
84
252
420
840
126
42
84
420
126
```

**Example Output 2**

```
1
```

All numbers have a remainder of 0 when divided by 42.

<br/>

**Example Input 3**

```
39
40
41
42
43
44
82
83
84
85
```

**Example Output 3**

```
6
```

The remainders when dividing each number by 42 are 39, 40, 41, 0, 1, 2, 40, 41, 0, and 1, respectively. There are 6 distinct remainders.
