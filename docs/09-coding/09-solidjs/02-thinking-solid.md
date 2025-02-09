# 扎实的思维

Solid 的设计融合了各种特性，帮助我们创建更好的网站和应用程序。了解这些基本原理可以更轻松地学习和使用 Solid。

本节将介绍这些特定原则。为了确保每个人都理解这些概念，我们将在高层次上讨论它们。

## 声明式编程

声明式编程是指编写计算机代码的做法，该代码解释了计算机应该做什么，而不是如何完成它。这就像告诉厨师做煎蛋卷一样——他们知道该怎么做。

命令式编程告诉计算机如何一步一步地做某事。这就像告诉别人如何做煎蛋卷：“首先，拿两个鸡蛋。然后，将鸡蛋打入碗中。在平底锅中融化一些黄油，然后加入鸡蛋。”您正在就如何制作煎蛋卷给出具体说明。

让我们简要了解一下这些方法中的每一种。

### 声明式

```js
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((value) => value * 2);
```

在上面的代码中，我们有一个名为 `numbers` 的数字数组。然后我们使用该 `map` 函数创建一个名为 `double` 的新数组——每一项的值是原数组的两倍。

该函数是一个声明性函数，因为它允许您指定要应用于数组的每个元素的转换，而不必关心 `map` 的实现。

### 命令式

```js
const numbers = [1, 2, 3, 4, 5];
const double = [];
for (let i = 0; i < numbers.length; i++) {
  double.push(numbers[i] * 2);
}
```

在上面的代码中，我们使用 `for` 循环来遍历数组的每个元素，一次一个。在循环中，我们使用该 `push` 方法将每个数字加倍的结果添加到一个名为 `double` 的数组。

我们完成了同样的任务，但代码更加复杂和乏味。

Solid 在各个领域利用声明式编程方法，使其更加用户友好和易于理解。这种方法强调说明期望的结果是什么，而不是如何实现它，使其不那么复杂，学习和使用起来更快。

## 消失的组件

在不考虑更新的情况下，构建组件已经足够具有挑战性了。Solid 中的更新独立于组件进行处理。组件函数在消失之前只被调用一次。

组件的存在是为了组织代码，而不是处理更新或重新渲染。下面是此过程的快速图：

<ThemedImage
  alt="Solid simple state update"
  lightSrc="https://docs.solidjs.com/images/foundations/thinking-solid/solid-simple-state-update-light.svg"
  darkSrc="https://docs.solidjs.com/images/foundations/thinking-solid/solid-simple-state-update-dark.svg"
/>

## 读 / 写分离

在构建系统时，对数据进行精确控制和可预测性可以改善开发人员在使用这些系统时的体验。为了在这些系统中强制执行单向流，我们不需要完全不可变性，而只需要控制谁可以或不能写入或修改数据的能力。

Solid 通过实现其原语来做到这一点。这些基元的示例包括 `createStore`、`createSignal` 和更多。

让我们看一个例子，说明我们所说的读 / 写隔离是什么意思。

```js
const [name, setName] = createSignal("");
const valueOfName = name(); // 👈 读取
function setValueOfName(text) {
  setName(text); // 👈 写入
}
```

在上面的代码片段中，`createSignal` 我们使用了 Solids 基元之一。简而言之，调用此原语会创建一个反应式值；调用这个原语返回的两件事是 getter 和 setter。请注意，`name`（getter）与 `setName`（setter）是分开的。这只是 Solid 分离事物的方式之一。

## 简单总比容易好

使用显式和一致的约定，即使它们需要更多的努力，也有利于构建健壮的系统。这是细粒度反应性的重要一课。Solid 旨在提供最少的工具，为进一步开发奠定基础。

这与 Solid 采用更具声明性的方法而不是命令式方法的原因一致。
