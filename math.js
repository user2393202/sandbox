const prev = x => { [y] = x; return y  }
const succ = x => [x]
const zero = () => []
const id = x => x
const isZero = (x) => prev(x) === undefined

const _0 = zero()
const _1 = succ(_0)
const _2 = succ(_1)
const _3 = succ(_2)
const _4 = succ(_3)
const _5 = succ(_4)


const unary = f => ((m) => f(m) )
const binary = f => ((m,n) => f(m,n) )  

const f = (g, h) => ((x,y) => isZero(y) ? g(x) : h(f(g,h)(x, prev(y)), x) )


const add = f(id, unary(succ) )
const mult = f(zero, binary(add))
const exp = f(() => _1, binary(mult))


const count = (x) => x === undefined ? -1 : 1 + count(x[0])
console.log(count(add(_3,_4)))
console.log(count(mult(_3,_5)))
console.log(count(exp(_4,_4)))



