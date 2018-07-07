function minimumBribes(q) {
  const isTooChaotic = q.some((val, index) => {
    return val - 3 > index
  })
  if (isTooChaotic) {
    return 'Too chaotic'
  }
  let answer = 0
  let swapped = false
  for (let i = 1; i < q.length; i++) {
    swapped = false
    for (let j = 0; j < q.length - i; j++) {
      if (q[j] > q[j + 1]) {
        const temp = q[j]
        q[j] = q[j + 1]
        q[j + 1] = temp
        answer++
        swapped = true
      }
    }
    if (!swapped) {
      return answer
    }
  }
}

export default minimumBribes
