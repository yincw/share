# 常见算法用例

- 动态规划
- LRU 缓存算法

## LRU 缓存算法

LRU: Least Recently Used 最近最少（最久没有）使用，比如显示最近打开的路由页面，最多可显示 10 个，超过 10 个移除**最久没有使用**的路由页面。

```js
class LRUCache {
    #map;
    #length;

    constructor(length) {
        this.#map = new Map();
        this.#length = length;
    }

    get(key) {
        if (!this.#map.has(key)) {
            return
        }
        const value = this.#map.get(key);
        this.#map.delete(key);
        this.#map.set(key, value);
        return value;
    }

    set(key, value) {
        if (!this.#map.has(key)) {
            this.#map.delete(key);
        }
        this.#map.set(key, value);
        if (this.#map.size > this.#length) {
            const firstKey = this.#map.keys().next().value;
            this.#map.delete(firstKey);
        }
    }
}
```

## 动态规划

一台收割机给不同地块收割获得钱不同，同时耗费的油量也不同；以下是 6 个地块的耗油量和收益的列表 [(1, 1), (7, 9), (6, 10), (2, 4), (3, 5), (6, 10)]，请问收割机在给定油量 n=10（n>=1）的情况下，如何尽可能赚到更多的钱？

提示：
1. 使用动态规划，从第一个地块开始算，油量 dp[1] 获得最多收益，再一次计算油量 dp[n] 的最多收益。
2. 上述答案为 16。

```js
function totalIncome(totalFuel, fuel, income, len) {
  const ks = []
  // 初始化方案矩阵
  for (let i = 0; i <= len; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= len; i++) {
    for (let w = 0; w <= totalFuel; w++) {
      if (i === 0 || w === 0) {
        // 忽略矩阵的第一列和第一行，只处理索引不为0的列和行
        ks[i][w] = 0
      } else if (fuel[i - 1] <= w) {
        // 油量必须小于给定总油量才能成为方案的一部分，否则，总油量就会超出给定的总油量
        const a = income[i - 1] + ks[i - 1][w - fuel[i - 1]]
        const b = ks[i - 1][w]
        // 当找到解决方案时，选择收益最大的那个
        ks[i][w] = a > b ? a : b
      } else {
        // 如果总油量超出给定的总油量，就用之前的值
        ks[i][w] = ks[i - 1][w]
      }
    }
  }

  console.log('ks', ks)

  // 最后，解决方案就在这个矩阵的右下角的最后一个格子里，返回它
  return ks[len][totalFuel]
}

// 油量
const fuel = [1, 7, 6, 2, 3, 6]
// 收益
const income = [1, 9, 10, 4, 5, 10]
// 地块数量
const len = income.length

// 给定总油量
const totalFuel = 10

console.log(totalIncome(totalFuel, fuel, income, len)) // 16
```

- https://blog.csdn.net/yrfjygb/article/details/116208361