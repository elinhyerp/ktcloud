const map = new Map()
map.set('1002', '조깅, 팔굽혀펴기')
map.set('1003', '조깅2, 팔굽혀펴기2')

console.log(map.get('1002'))
console.log(map.get('1003'))

const set = new Set()
set.add('1002')
set.add('1003')
set.add('1002') // 중복된 값은 추가되지 않음

console.log(set.has('1002'))
console.log(set.size)

// for ... of 반복문 실습
for (const val of set) {
  console.log(val)
}

for (const val of map) {
  console.log(val)
}

// map 에서 for문 사용해서 key를 사용해서 value만 출력
for (const val of map.keys()) {
  console.log(map.get(val))
}

const nums = [1, 2, 3, 4]

const squares = nums.map(n => n ** 2)
console.log(`squares: ${squares}`)

const evens = nums .filter(n => n % 2 === 0)
console.log(`evens: ${evens}`)

const sum = nums.reduce((acc, cur) => acc + cur, 0)
console.log(`sum: ${sum}`)

const found = nums.find(n => n > 2)
console.log(`found: ${found}`)

const hasNegative = nums.some(n => n < 0)
console.log(`hasNegative: ${hasNegative}`)

const allPositive = nums.every(n => n > 0)
console.log(`allPositive: ${allPositive}`)

const nested = [1, 2, 3]
const duplicated = nested.flatMap(n => [n, n])
console.log(`duplicated: ${duplicated}`)


// 구조분해 + 스프레드
const user = {
  name: 'John',
  age: 30,
  city: 'New York' 
}

const { name, age, city } = user
console.log(`name: ${name}`)
console.log(`age: ${age}`)
console.log(`city: ${city}`)

const user2 = {
  name: 'Jane',
  ...user
}

console.log(`user2: ${user2}`)

