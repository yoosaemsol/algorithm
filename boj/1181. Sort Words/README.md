## [1181. **Sort Words**](https://www.acmicpc.net/problem/1181)

**Problem**

Write a program that sorts N words consisting of lowercase alphabets according to the following conditions:

- Sort by length in ascending order.
- If the lengths are equal, sort lexicographically.
- Remove duplicate words, keeping only one instance.

<br/>

**Input**

- The first line contains the number of words, N (1 ≤ N ≤ 20,000). From the second line to the Nth line, each line contains a word consisting of lowercase alphabets. The length of each word does not exceed 50.

**Output**

- Print the words sorted according to the conditions.

<br/>
<br/>

**Example Input 1**

```
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
```

**Example Output 1**

```
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate
```

<hr/>

## [1181. **단어 정렬**](https://www.acmicpc.net/problem/1181)

**문제**

알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

- 길이가 짧은 것부터
- 길이가 같으면 사전 순으로
- 단, 중복된 단어는 하나만 남기고 제거해야 한다.

<br/>

**입력**

- 첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.

**출력**

- 조건에 따라 정렬하여 단어들을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
```

**예제 출력 1**

```
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate
```
