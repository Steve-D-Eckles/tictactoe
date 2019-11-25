let grid = ['', '', '', '', '', '', '', '', '']
let turn = Math.round(Math.random())
const syms = ['X', 'O']
const arr = Array.from(document.getElementById('board').children)
const output = document.getElementById('turn')

output.textContent = `It's Player ${syms[turn]}'s turn.`
document.getElementById('reset').addEventListener('click', reset)
gameStart()

function gameStart () {
  for (const i of arr) {
    i.textContent = ''
    i.addEventListener('click', play)
  }
}
function play (event) {
  const index = arr.indexOf(event.target)
  grid[index] = syms[turn]
  event.target.textContent = syms[turn]
  if (winCheck(index)) {
    output.textContent = `Player ${syms[turn]} wins!`
    for (const element of arr) {
      element.removeEventListener('click', play)
    }
  } else if (grid.filter(n => n !== '').length === 9) {
    output.textContent = "It's a tie!"
  } else {
    turn = turn === 1 ? 0 : 1
    output.textContent = `It's Player ${syms[turn]}'s turn.`
  }
  event.target.removeEventListener('click', play)
}

function winCheck (index) {
  if (index === 0) {
    if ((grid[0] === grid[1] && grid[0] === grid[2]) ||
        (grid[0] === grid[3] && grid[0] === grid[6]) ||
        (grid[0] === grid[4] && grid[0] === grid[8])) return true
  }
  if (index === 1) {
    if ((grid[1] === grid[2] && grid[1] === grid[0]) ||
        (grid[1] === grid[4] && grid[1] === grid[7])) return true
  }
  if (index === 2) {
    if ((grid[2] === grid[1] && grid[2] === grid[0]) ||
        (grid[2] === grid[5] && grid[2] === grid[8]) ||
        (grid[2] === grid[4] && grid[2] === grid[6])) return true
  }
  if (index === 3) {
    if ((grid[3] === grid[4] && grid[3] === grid[5]) ||
        (grid[3] === grid[0] && grid[3] === grid[6])) return true
  }
  if (index === 4) {
    if ((grid[4] === grid[3] && grid[4] === grid[5]) ||
        (grid[4] === grid[1] && grid[4] === grid[7]) ||
        (grid[4] === grid[0] && grid[4] === grid[8]) ||
        (grid[4] === grid[6] && grid[7] === grid[2])) return true
  }
  if (index === 5) {
    if ((grid[5] === grid[2] && grid[5] === grid[8]) ||
        (grid[5] === grid[4] && grid[5] === grid[3])) return true
  }
  if (index === 6) {
    if ((grid[6] === grid[3] && grid[6] === grid[0]) ||
        (grid[6] === grid[7] && grid[6] === grid[8]) ||
        (grid[6] === grid[4] && grid[6] === grid[2])) return true
  }
  if (index === 7) {
    if ((grid[7] === grid[6] && grid[7] === grid[8]) ||
        (grid[7] === grid[4] && grid[7] === grid[1])) return true
  }
  if (index === 8) {
    if ((grid[8] === grid[5] && grid[8] === grid[2]) ||
        (grid[8] === grid[7] && grid[8] === grid[6]) ||
        (grid[8] === grid[4] && grid[8] === grid[0])) return true
  }
  return false
}

function reset () {
  gameStart()
  grid = ['', '', '', '', '', '', '', '', '']
  turn = Math.round(Math.random())
  output.textContent = `It's Player ${syms[turn]}'s turn.`
}
