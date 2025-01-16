# fmt 包

## `Print` 函数

```go
package main

import "fmt"

func main() {
  fmt.Print("hello, world\n") // [!code focus]
}
```

`Print` 函数会打印传入的字符串，但**不会自动添加换行符**。

## `Println` 函数

```go
package main

import "fmt"

func main() {
  fmt.Println("hello, world") // [!code focus]
}
```

`Println` 函数会打印传入的字符串，并**自动添加换行符**。

## `Printf` 函数

```go
package main

import "fmt"

func main() {
  fmt.Printf("hello, world\n") // [!code focus]
}
```

`Printf` 函数会**格式化**打印传入的字符串，但**不会自动添加换行符**。
