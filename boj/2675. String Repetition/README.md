## [2675. **String Repetition**](https://www.acmicpc.net/problem/2675)

**Problem**

After receiving a string S as input, write a program that repeats each character R times to create a new string P and then output P. In other words, repeat the first character R times, the second character R times, and so on, to create P. S only contains QR Code "alphanumeric" characters.

QR Code "alphanumeric" characters are: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%\*+-./:

<br/>

**Input**

- The first line contains the number of test cases, T (1 ≤ T ≤ 1,000). Each test case consists of the repetition count R (1 ≤ R ≤ 8) and the string S, separated by a space. The length of S is at least 1 and does not exceed 20 characters.

**Output**

- For each test case, output P.

<br/>

**Example Input 1**

```
2
3 ABC
5 /HTP
```

**Example Output 1**

```
AAABBBCCC
/////HHHHHTTTTTPPPPP
```
