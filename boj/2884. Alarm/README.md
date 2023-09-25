## [2884. Alarm](https://www.acmicpc.net/problem/2884)

**Problem**

Every morning, Sang-geun wakes up to an alarm. Although he intends to get up right away when the alarm goes off, his desire to sleep a little longer always makes him late for school.

Sang-geun has tried every possible method to overcome this, but he couldn't eliminate his desire to sleep a bit more.

Seeing Sang-geun's pitiful situation, his friend Chang-young recommended a method to him.

The method is to "set the alarm 45 minutes early."

This method is simple. It involves changing the originally set alarm time to be 45 minutes earlier. Since you'll still hear the alarm sound, you can turn it off and get a little more sleep. By using this method, you can feel like you've slept in a bit every morning and avoid being late for school.

Given the current time when Sang-geun has set the alarm, write a program to determine when he should set it if he follows Chang-young's method.

<br/>

**Input**

- The first line contains two integers, H and M. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59), indicating the current alarm time set by Sang-geun, H hours and M minutes.

- Time is represented in a 24-hour format. In the 24-hour format, the day starts at 0:00 (midnight) and ends at 23:59 (1 minute before the next midnight). When representing time, unnecessary leading zeros are not used.

**Output**

- Output the time at which Sang-geun should set the alarm when using Chang-young's method. (Output it in the same format as the input.)

<br/>

**Example Input 1**

```
10 10
```

**Example Output 1**

```
9 25
```

**Example Input 2**

```
0 30
```

**Example Output 2**

```
23 45
```

**Example Input 3**

```
23 40
```

**Example Output 3**

```
22 55
```
