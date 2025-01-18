package main

import (
	"fmt"
	"time"
)

func main() {
	template := "2006-01-02 15:04:05"
	timeStr := "2022-01-01 12:00:00"
	timeObj, err := time.ParseInLocation(template, timeStr, time.Local)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(timeObj)
}
