const grid = ['', '', '', '', '', '', '', '', '']
let turn = 0
const syms = ['X', 'O']
const arr = Array.from(document.getElementById('board').children)
const turnHeading = document.getElementById('turn')

turnHeading.textContent = `It's Player ${syms[turn]}'s turn.`

for (let i = 0; i < 9; i++) {
  arr[i].addEventListener('click', play)
}

function play (event) {
  const index = arr.indexOf(event.target)
  event.target.textContent = syms[turn]
  turn = turn === 1 ? 0 : 1
  turnHeading.textContent = `It's Player ${syms[turn]}'s turn.`
  event.target.removeEventListener('click', play)
}


