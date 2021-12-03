package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type SubmarinePosition struct {
	forward int
	aim     int
	depth   int
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	dat, err := os.ReadFile("input.txt")

	submarine := SubmarinePosition{}

	dataParsed := strings.Fields(string(dat))
	check(err)
	var position string

	for _, val := range dataParsed {

		if num, err := strconv.Atoi(val); err == nil {
			if position == "down" {
				submarine.aim = submarine.aim + num
			} else if position == "up" {
				submarine.aim = submarine.aim - num
			} else if position == "forward" {
				if submarine.aim == 0 {
					submarine.forward = num + submarine.forward
				} else {
					submarine.forward = submarine.forward + num
					submarine.depth = num*submarine.aim + submarine.depth
				}
			}
		} else {
			position = val
		}
	}
	fmt.Println(submarine, submarine.depth*submarine.forward)
}
