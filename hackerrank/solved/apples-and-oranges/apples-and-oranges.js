function countApplesAndOranges(houseBegin, houseEnd, a, b, apples, oranges) {
  const applesFell = apples
    .map(apple => apple + a)
    .filter(apple => apple >= houseBegin && apple <= houseEnd)
  const orangesFell = oranges
    .map(orange => orange + b)
    .filter(orange => orange >= houseBegin && orange <= houseEnd)

  const applesOnSamsHouse = applesFell.length
  const orangesOnSamsHouse = orangesFell.length

  return [applesOnSamsHouse, orangesOnSamsHouse]
}

export default countApplesAndOranges
