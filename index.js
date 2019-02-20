function theBeatlesPlay(musicians, instruments) {
 var array = []
  for (let i = 0; i < musicians.length; i++) 
 {
    var string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}


function johnLennonFacts (facts){
 var array = []
  let i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles (Number){
  var arr = []
  let i = 0
  do {
    arr.push('I love the Beatles!')
    i++
  } while (i <= number && number < 15);
  return arr

}