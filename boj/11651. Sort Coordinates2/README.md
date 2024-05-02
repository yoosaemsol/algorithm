## [11651. **Sort Coordinates 2**](https://www.acmicpc.net/problem/11651)

**Problem**

Given N points on a two-dimensional plane. Write a program that sorts the points in the order of increasing y-coordinate. If the y-coordinates are the same, sort them in the order of increasing x-coordinate.

<br/>

**Input**

- The first line contains the number of points, N (1 ≤ N ≤ 100,000). From the second line to the Nth line, the positions (xi, yi) of the i-th point are given. (-100,000 ≤ xi, yi ≤ 100,000) Coordinates are always integers, and there are no two points with the same position.

**Output**

- Print the sorted points in N lines from the first line.

<br/>
<br/>

**Example Input 1**

```
5
0 4
1 2
1 -1
2 2
3 3
```

**Example Output 1**

```
1 -1
1 2
2 2
3 3
0 4
```
