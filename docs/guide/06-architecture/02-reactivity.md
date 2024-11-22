# 响应式

- 虚拟 DOM（Virtual DOM）
  - https://zh-hans.legacy.reactjs.org/docs/faq-internals.html
  - https://zh-hans.legacy.reactjs.org/docs/rendering-elements.html
- 对比算法（Diffing 算法）/协调
  - https://zh-hans.legacy.reactjs.org/docs/reconciliation.html
  - https://github.com/acdlite/react-fiber-architecture
    - https://www.jianshu.com/p/48c3f3b0125c
  - https://zh-hans.legacy.reactjs.org/docs/implementation-notes.html
- 任务调度器
- 大文件上传
  - https://juejin.cn/post/7416660926634262579

- https://zh-hans.react.dev/learn/lifecycle-of-reactive-effects
- https://zh-hans.react.dev/learn/updating-objects-in-state
- https://zh-hans.react.dev/learn/updating-arrays-in-state

## 事件分发系统（Vue）

请你用js实现一个事件分发系统，该系统需要满足以下要求：

1. 可以通过 emit 触发事件
2. 可以通过 on 监听事件，在事件触发时会调用相应的回调函数
3. 可以通过 remove 来移除事件监听
4. 同一个事件类型，允许有多个回调函数，这些回调函数的处理顺序按照先注册先触发的流程来依次触发

```js
class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(event, callback) {
    // 监听 event 事件，触发时调用 callback 函数
    let callbacks = this.events[event] || []

    // 把当前的 callback 事件处理函数放到名为 event 的事件处理函数里
    // 回调函数的处理顺序取决于注册顺序
    callbacks.push(callback)
    this.events[event] = callbacks
    return this
  }

  remove(event, callback) {
    // 停止监听 event 事件
    let callbacks = this.events[event]
    // 通过 filter 筛选出数组中不等于当前函数的事件
    this.events[event] = callbacks && callbacks.filter((fn) => fn !== callback)
    return this
  }

  emit(event, ...args) {
    // 触发事件，并把参数传给事件的处理函数
    const callbacks = this.events[event]
    // 遍历事件处理函数数组，依次调用其中的回调函数
    // apply 第一个参数时 null或者 undefined，就是把 this 指向 window，然后把参数传给事件的处理函数
    callbacks.forEach((fn) => fn.apply(null, args))
    return this
  }
}

const eventBus = new EventEmitter()
const fn1 = function (name, arg) {
  console.log('fn1', `${name} ${arg}`)
}
const fn2 = function (name, arg) {
  console.log('fn2', `hah, ${name} ${arg}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, 'hahah')
eventBus.remove('aaa', fn2)
```

## 任务调度器（React）

请你设计一个任务调度器 `TaskScheduler` 类，具备以下功能：

1. 能够添加任务，每个任务都有一个唯一的标识符和一个执行函数。
2. 能够按照添加任务的顺序执行任务。
3. 能够设置每个任务延迟执行时间（毫秒）。
4. 允许任务设置重试次数 `retryCount`，如果任务执行失败，可以在规定的重试次数内重新执行。
5. 添加一个 `start` 方法，调用后任务开始依次执行。
6. 添加一个 `pause` 方法，能够暂停任务调度器，期间新添加的任务不会执行。
7. 添加一个 `resume` 方法，能够恢复任务调度器的执行。
8. 添加一个 `stop` 方法，停止任务调度器的执行，并清空任务列表。

```js
function a () {}
```

- https://juejin.cn/post/7271103274063757369
- https://blog.csdn.net/Zheng548/article/details/118115991
- https://baolei.blog.csdn.net/article/details/121112331
- https://blog.csdn.net/qianyuge/article/details/123996439
- https://github.com/DoTalkLily/TaskManager
- https://ramiroquesada.github.io/To-Do-List/

## 带并发限制的异步调度器

JS 实现一个带并发限制的异步调度器 `scheduler`，保证同时运行的任务最多有两个。

例如目前有4个任务，完成时间分别为，1000ms、500ms、300ms、400ms。

那么在该调度器中的执行完成顺序应该为 2、3、1、4。

因为 1、2 先进入队列中，2 完成则输出 2，
3 进入，3完成输出3，此时为 800ms，
4进入后的200ms，1完成输出1，而后4完成输出4.

```js
class Scheduler {
  constructor(max) {
    // 最大调度数
    this.max = max
    // 执行栈执行任务数
    this.count = 0
    // 等待队列
    this.queue = []
  }

  async add(promiseFunc) {
    // 如果执行栈已满，则阻塞当前任务
    // 将任务包装在一个 promise，只要内部没有 resolve，promise就没有结果，就会处于阻塞状态
    // 将 resolve 放进任务队列排队
    if (this.count >= this.max) {
      await new Promise((resolve, reject) => this.queue.push(resolve))
    }

    // 若没有达到最高并发限制，就执行任务，
    // count+1表示当前执行栈加一个任务执行
    this.count++
    await promiseFunc()

    // count-1 表示任务执行完毕，执行栈减少一个任务
    this.count--
    // 已执行完一个任务，所以执行栈一定有坑，查看任务队列是否有任务排队
    // 取出任务调用 resolve 解锁阻塞
    if (this.queue.length) {
      // 去任务队列拿出队首任务的 resolve并调用，解除阻塞，执行任务
      this.queue.shift()()
    }
  }
}

const timeout = (time) => {
  return new Promise((r) => setTimeout(r, time))
}

const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  // add 返回一个 promise，参数也是一个 promise
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
// output: 2 3 1 4
```

- https://juejin.cn/post/7231932125254942779
- https://blog.csdn.net/qq_69223185/article/details/141466377
- https://blog.csdn.net/prwprw/article/details/139096340
- 
- https://juejin.cn/post/7395471538764496908
- https://juejin.cn/post/7340076087248011298
- http://en.jsrun.net/9vJKp
- https://juejin.cn/post/7374616052946599988
- https://juejin.cn/post/7356534347509645375

## React 任务调度系统分析

- https://segmentfault.com/a/1190000041126142
- https://zhuanlan.zhihu.com/p/690230544
- https://juejin.cn/post/7331925629082878003
- https://juejin.cn/post/7371311251434881074
- https://zhuanlan.zhihu.com/p/589886160
- https://blog.csdn.net/qq_41496424/article/details/143785606