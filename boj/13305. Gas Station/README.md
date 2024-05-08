## [13305. Gas Station](https://www.acmicpc.net/problem/13305)

**Problem**

In a certain country, there are N cities located along a straight road. For convenience, let's assume the road is oriented horizontally. When traveling from the leftmost city to the rightmost city by car, you need to refuel at gas stations along the way. The capacity of the car's gas tank is unlimited, so you can refuel as much gas as needed. Traveling 1 km on the road consumes 1 liter of gas. Each city has only one gas station, and the price of gas per liter may vary from city to city. The unit of price is in won.

For example, suppose there are 4 cities in this country as shown in the following figure. The number inside the circle represents the price per liter of gas at the gas station in that city. The number above the road represents the length of the road.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/13305/1.png" />

Starting from the leftmost city, if you refuel 6 liters of gas and travel to the rightmost city without refueling again, the total cost will be 30 won. Alternatively, if you refuel 2 liters of gas in the leftmost city (costing 2 × 5 = 10 won), travel to the next city, refuel 3 liters of gas (costing 3 × 2 = 6 won), and refuel 1 liter of gas in the next city (costing 1 × 4 = 4 won), the total cost will be 20 won. Another option is to refuel 2 liters of gas in the leftmost city (costing 2 × 5 = 10 won), travel to the next city, refuel 4 liters of gas (costing 4 × 2 = 8 won), and travel to the rightmost city, resulting in a total cost of 18 won.

Given the gas prices at each city's gas station and the lengths of the roads connecting each pair of adjacent cities, write a program to calculate the minimum cost of traveling from the leftmost city to the rightmost city.

**Input**

- The standard input contains the following information. The first line contains an integer N (2 ≤ N ≤ 100,000) indicating the number of cities. The next line contains N-1 natural numbers representing the lengths of the roads connecting adjacent cities from the leftmost city. The next line contains N natural numbers representing the price per liter of gas at each gas station, in order from the leftmost city. The distance from the leftmost city to the rightmost city is a natural number between 1 and 1,000,000,000, inclusive. The price per liter of gas is a natural number between 1 and 1,000,000,000, inclusive.

**Output**

- Print the minimum cost of traveling from the leftmost city to the rightmost city on the standard output.

<br/>
<br/>

**Example Input 1**

```
4
2 3 1
5 2 4 1
```

**Example Output 1**

```
18
```

**Example Input 2**

```
4
3 3 4
1 1 1 1
```

**Example Output 2**

```
10
```

<hr/>

## [13305. 주유소](https://www.acmicpc.net/problem/13305)

**문제**

어떤 나라에 N개의 도시가 있다. 이 도시들은 일직선 도로 위에 있다. 편의상 일직선을 수평 방향으로 두자. 제일 왼쪽의 도시에서 제일 오른쪽의 도시로 자동차를 이용하여 이동하려고 한다. 인접한 두 도시 사이의 도로들은 서로 길이가 다를 수 있다. 도로 길이의 단위는 km를 사용한다.

처음 출발할 때 자동차에는 기름이 없어서 주유소에서 기름을 넣고 출발하여야 한다. 기름통의 크기는 무제한이어서 얼마든지 많은 기름을 넣을 수 있다. 도로를 이용하여 이동할 때 1km마다 1리터의 기름을 사용한다. 각 도시에는 단 하나의 주유소가 있으며, 도시 마다 주유소의 리터당 가격은 다를 수 있다. 가격의 단위는 원을 사용한다.

예를 들어, 이 나라에 다음 그림처럼 4개의 도시가 있다고 하자. 원 안에 있는 숫자는 그 도시에 있는 주유소의 리터당 가격이다. 도로 위에 있는 숫자는 도로의 길이를 표시한 것이다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/13305/1.png" />

제일 왼쪽 도시에서 6리터의 기름을 넣고, 더 이상의 주유 없이 제일 오른쪽 도시까지 이동하면 총 비용은 30원이다. 만약 제일 왼쪽 도시에서 2리터의 기름을 넣고(2×5 = 10원) 다음 번 도시까지 이동한 후 3리터의 기름을 넣고(3×2 = 6원) 다음 도시에서 1리터의 기름을 넣어(1×4 = 4원) 제일 오른쪽 도시로 이동하면, 총 비용은 20원이다. 또 다른 방법으로 제일 왼쪽 도시에서 2리터의 기름을 넣고(2×5 = 10원) 다음 번 도시까지 이동한 후 4리터의 기름을 넣고(4×2 = 8원) 제일 오른쪽 도시까지 이동하면, 총 비용은 18원이다.

각 도시에 있는 주유소의 기름 가격과, 각 도시를 연결하는 도로의 길이를 입력으로 받아 제일 왼쪽 도시에서 제일 오른쪽 도시로 이동하는 최소의 비용을 계산하는 프로그램을 작성하시오.

<br/>

**입력**

- 표준 입력으로 다음 정보가 주어진다. 첫 번째 줄에는 도시의 개수를 나타내는 정수 N(2 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 인접한 두 도시를 연결하는 도로의 길이가 제일 왼쪽 도로부터 N-1개의 자연수로 주어진다. 다음 줄에는 주유소의 리터당 가격이 제일 왼쪽 도시부터 순서대로 N개의 자연수로 주어진다. 제일 왼쪽 도시부터 제일 오른쪽 도시까지의 거리는 1이상 1,000,000,000 이하의 자연수이다. 리터당 가격은 1 이상 1,000,000,000 이하의 자연수이다.

**출력**

- 표준 출력으로 제일 왼쪽 도시에서 제일 오른쪽 도시로 가는 최소 비용을 출력한다.

<br/>
<br/>

**예제 입력 1**

```
4
2 3 1
5 2 4 1
```

**예제 출력 1**

```
18
```

**예제 입력 2**

```
4
3 3 4
1 1 1 1
```

**예제 출력 2**

```
10
```
