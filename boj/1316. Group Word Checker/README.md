## [1316. **Group Word Checker**](https://www.acmicpc.net/problem/1316)

**Problem**

A group word refers to a word in which for each letter that exists in the word, each letter appears continuously. For example, "ccazzzzbb" is a group word because c, a, z, and b all appear continuously. Similarly, "kin" is a group word because k, i, and n appear continuously. However, "aabbbccb" is not a group word because b appears with gaps.

You are given N words as input, and you need to write a program that outputs the number of group words.

<br/>

**Input**

- The first line contains the number of words, N. N is a natural number that is less than or equal to 100. From the second line to the Nth line, there are N words. Each word consists of lowercase letters only, is not repeated, and has a maximum length of 100.

**Output**

- Output the number of group words on the first line.

<br/>

**Example Input 1**

```
3
happy
new
year
```

**Example Output 1**

```
3
```

<br/>

**Example Input 2**

```
4
aba
abab
abcabc
a
```

**Example Output 2**

```
1
```

<br/>

**Example Input 3**

```
5
ab
aa
aca
ba
bb
```

**Example Output 3**

```
4
```

<br/>

**Example Input 4**

```
2
yzyzy
zyzyz
```

**Example Output 4**

```
0
```

<br/>

**Example Input 5**

```
1
z
```

**Example Output 5**

```
1
```

<br/>

**Example Input 6**

```
9
aaa
aaazbz
babb
aazz
azbz
aabbaa
abacc
aba
zzaz
```

**Example Output 6**

```
2
```
