# 无限 debugger

## 初级

### 示例

```ts:no-line-numbers twoslash
setInterval(() => {
  debugger;
});

setTimeout(function t() {
  debugger;
  setTimeout(t);
});

setInterval("debugger");

setInterval(Function("debugger"));
```

### 破解方法

![破解方法](tmp9D37.png)

## 中级

### 示例

```ts:no-line-numbers twoslash
setInterval("1;debugger");
```

### 破解方法

![破解方法](tmpC4CC.png)

## 高级

### 示例

```ts:no-line-numbers twoslash
setInterval(() => Function(`${Math.random()};debugger`)());
```

![破解方法](tmp5700.png)
