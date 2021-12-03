package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}
func main() {

	dat, err := os.ReadFile("input.txt")

	dataParsed := strings.Fields(string(dat))
	check(err)

	submarineMap := map[string]int{
		"forward": 0,
		"up":      0,
		"down":    0,
	}

	var position string
	for _, val := range dataParsed {
		if num, err := strconv.Atoi(val); err == nil {
			submarineMap[position] = submarineMap[position] + num
		} else {
			position = val
		}
	}

	a := submarineMap["down"] - submarineMap["up"]

	b := a * submarineMap["forward"]
	fmt.Println(b)
}
