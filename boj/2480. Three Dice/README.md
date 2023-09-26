## [2480. **Three Dice**](https://www.acmicpc.net/problem/2480)

**Problem**

There is a game where you roll three dice with numbers from 1 to 6, and you receive a prize according to the following rules:

1.  If all three dice show the same number, you receive a prize of 10,000 won plus the number on the dice times 1,000 won.
2.  If two of the dice show the same number, you receive a prize of 1,000 won plus the number on the dice times 100 won.
3.  If all three dice show different numbers, you receive a prize of the largest number among them times 100 won.

For example, if you roll three dice and get the numbers 3, 3, and 6, your prize is calculated as 1,000 + 3 _ 100, resulting in 1,300 won. If you roll three dice and get the numbers 2, 2, and 2, your prize is calculated as 10,000 + 2 _ 1,000, resulting in 12,000 won. If you roll three dice and get the numbers 6, 2, and 5, the largest number is 6, so your prize is calculated as 6 \* 100, resulting in 600 won.

Write a program that calculates the prize based on the results of rolling three dice.
<br/>

**Input**

- The first line contains three numbers separated by spaces, representing the numbers on the three dice.

**Output**

- Output the prize for the game on the first line.

<br/>

**Example Input 1**

```
3 3 6
```

**Example Output 1**

```
1300
```

**Example Input 2**

```
2 2 2
```

**Example Output 2**

```
12000
```

**Example Input 3**

```
6 2 5
```

**Example Output 3**

```
600
```
