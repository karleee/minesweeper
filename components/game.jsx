import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper'; 

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(9, 10) };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  restartGame() {
    this.setState({ board: new Minesweeper.Board(9, 10) });
  }

  render() {
    let modal;
    if (this.state.board.lost() || this.state.board.won()) {
      const text = this.state.board.won() ? 'Winner!' : 'Game Over';
      const klass = this.state.board.won() ? 'won' : 'lost';
      modal =
        <div class={`modal-screen ${klass}`}>
          <div class="modal-content">
            <p>{ text }</p>
            <button onClick={ this.restartGame }>Play Again</button>
          </div>
        </div>;
    }

    return (
      <div>
        { modal }
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}