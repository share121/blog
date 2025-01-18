# time 包

## 获取时间对象

```go
timeObj := time.Now()
```

## 格式化时间

```go
fmt.Println(timeObj.Format("2006-01-02 15:04:05"))
```

- `2006` 表示**年**
- `01` 表示**月**
- `02` 表示**日**
- `15` 表示 **24 小时制表示的小时** / `3` 表示 **12 小时制表示的小时**
- `04` 表示**分钟**
- `05` 表示**秒**
- `PM` 表示**大写的上/下午** / `pm` 表示**小写的上/下午**

:::tip 记忆方法

Go 语言是 2006 年 1 月 2 号 15 点 04 分 05 秒出生的

:::

## 时间戳

```go
// 获取毫秒时间戳
msTimeStamp := timeObj.Unix()
fmt.Println(msTimeStamp)

// 获取纳秒时间戳
nsTimeStamp := timeObj.UnixNano()
fmt.Println(nsTimeStamp)

// 将时间戳转换为时间对象
timeObj2 := time.Unix(timestamp, 0)
fmt.Println(timeObj2)
```

## 解析时间字符串

```go
template := "2006-01-02 15:04:05"
timeStr := "2022-01-01 12:00:00"
timeObj, err := time.ParseInLocation(template, timeStr, time.Local)
if err != nil {
	fmt.Println(err)
	return
}
fmt.Println(timeObj)
```
