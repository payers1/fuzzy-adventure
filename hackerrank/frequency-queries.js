function solve(queries) {
  const answer = queries.reduce(
    (p, query, i) => {
      let [operation, data] = query
      if (operation === 1) {
        let countOfN = 0
        if (!p.alt[data]) {
          countOfN = 1
        } else {
          const prevN = p.alt[data]
          p.counts[prevN]--
          countOfN = p.alt[data] + 1
        }
        p.alt[data] = countOfN

        if (!p.counts[countOfN] || p.counts[countOfN] === 0) {
          p.counts[countOfN] = 1
        } else {
          p.counts[countOfN]++
        }
      } else if (operation === 2) {
        if (p.alt[data]) {
          const prevCountOfN = p.alt[data]
          p.counts[prevCountOfN]--
          p.alt[data]--
          const newCountOfN = p.alt[data]
          p.counts[newCountOfN]++
        }
      } else if (operation === 3) {
        if (p.counts[data] && p.counts[data] > 0) {
          p.output.push(1)
        } else {
          p.output.push(0)
        }
      }
      return p
    },
    { output: [], alt: {}, counts: {} }
  )
  return answer.output
}

export default solve
