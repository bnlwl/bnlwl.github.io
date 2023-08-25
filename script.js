document.addEventListener('DOMContentLoaded', () => {
  const boardSize = 15;
  const board = [];
  const playerX = 'x';
  const playerO = 'o';
  let currentPlayer = playerX;

  const boardElement = document.getElementById('board');

  // 初始化棋盘
  for (let i = 0; i < boardSize; i++) {
    board.push(new Array(boardSize).fill(' '));
  }

  // 创建棋盘格子
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      boardElement.appendChild(cell);
    }
  }

  // 处理点击事件
  boardElement.addEventListener('click', (event) => {
    const cell = event.target;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    if (board[row][col] === ' ') {
      board[row][col] = currentPlayer;

      currentPlayer = currentPlayer === playerX ? playerO : playerX;
      cell.classList.add(currentPlayer)
      if (checkWin(row, col)) {
        setTimeout(() => {
          alert(`玩家 ${currentPlayer} 获胜！`);
          resetGame();
        }, 100);
      }
    }
  });

  // 判断是否有玩家胜利
  function checkWin(row, col) {
    const directions = [
      [1, 0], [0, 1], [1, 1], [-1, 1]
    ];
    for (const [dr, dc] of directions) {
      let count = 1;
      for (let i = 1; i < 5; i++) {
        const r = row + i * dr;
        const c = col + i * dc;
        if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === board[row][col]) {
          count++;
        } else {
          break;
        }
      }
      for (let i = 1; i < 5; i++) {
        const r = row - i * dr;
        const c = col - i * dc;
        if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === board[row][col]) {
          count++;
        } else {
          break;
        }
      }
      if (count >= 5) {
        return true;
      }
    }
    return false;
  }

  // 重置游戏
  function resetGame() {
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        board[row][col] = ' ';
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList = ['cell']
      }
    }
    currentPlayer = playerX;
  }
});
