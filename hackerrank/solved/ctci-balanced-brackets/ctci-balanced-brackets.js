function solve(line) {
  const opening = ['{', '(', '[']
  const endToOpenMap = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const stack = []
  const split = line.split('')
  for (let i = 0; i < split.length; i++) {
    const item = split[i]
    if (opening.includes(item)) {
      stack.push(item)
    } else if (stack.includes(endToOpenMap[item])) {
      stack.pop()
    } else {
      return 'NO'
    }
  }
  return stack.length === 0 ? 'YES' : 'NO'
}

export default solve
