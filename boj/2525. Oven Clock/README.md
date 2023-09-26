## [2525. **Oven Clock**](https://www.acmicpc.net/problem/2525)

**Problem**

KOI Electronics is developing an artificial intelligence oven that can easily make healthy and delicious smoked duck dishes. To use the artificial intelligence oven, you simply need to put an appropriate amount of smoked duck ingredients into the oven. The artificial intelligence oven will automatically calculate the time in minutes for when the oven cooking will be completed.

In addition, there is a digital clock on the front of KOI Electronics' artificial intelligence oven that informs the user of the time when the smoked duck dish will be ready.

Given the starting time of smoked duck cooking and the time required for oven cooking in minutes, write a program to calculate the time when the oven cooking will be completed.

<br/>

**Input**

- The first line contains the current time. The current time is represented as two integers separated by a space: the hour A (0 ≤ A ≤ 23) and the minute B (0 ≤ B ≤ 59). The second line contains the time required for cooking, C (0 ≤ C ≤ 1,000), in minutes.

**Output**

- Output the time when the cooking will be finished as the hour and minute, separated by a space. (Note that the hour is an integer between 0 and 23, and the minute is an integer between 0 and 59. The digital clock turns from 23:59 to 0:00 after one minute.)

<br/>

**Example Input 1**

```
14 30
20
```

**Example Output 1**

```
14 50
```

**Example Input 2**

```
17 40
80
```

**Example Output 2**

```
19 0
```

**Example Input 3**

```
23 48
25
```

**Example Output 3**

```
0 13
```
