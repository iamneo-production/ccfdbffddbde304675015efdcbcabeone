let currentPlayer = 'X';
let gameEnded = false;

function makeMove(index) {
  const btn = document.getElementsByClassName('btn')[index];
  
  if (btn.value || gameEnded) {
    return;
  }
  
  btn.value = currentPlayer;
  btn.disabled = true;
  btn.classList.add(currentPlayer);
  
  if (checkWin()) {
    document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
    document.getElementById('reset-btn').disabled = false;
    gameEnded = true;
  } else if (checkDraw()) {
    document.getElementById('result').textContent = "It's a draw!";
    document.getElementById('reset-btn').disabled = false;
    gameEnded = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('result').textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const btns = document.getElementsByClassName('btn');
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (btns[index].value === currentPlayer && btns[b].value === currentPlayer && btns[c].value === currentPlayer) {
      return true;
    }
  }
  
  return false;
}

function checkDraw() {
  const btns = document.getElementsByClassName('btn');
  
  for (let btn of btns) {
    if (!btn.value) {
      return false;
    }
  }
  
  return true;
}

function resetGame() {
  const btns = document.getElementsByClassName('btn');
  
  for (let btn of btns) {
    btn.value = '';
    btn.disabled = false;
    btn.classList.remove('X', 'O');
  }
  
  currentPlayer = 'X';
  gameEnded = false;
  document.getElementById('result').textContent = `Player ${currentPlayer}'s turn`;
  document.getElementById('reset-btn').disabled = true;
}