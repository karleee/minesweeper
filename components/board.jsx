import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    const that = this;
    return (
      <div id="board">
        {this.renderRows()}
      </div>
    );
  }

  renderRows() {
    const board = this.props.board;
    return board.grid.map((row, rowIndx) => {
      return (
        <div className="row" key={ `row-${rowIndx}` }>
            {this.renderTiles(row, rowIndx)}
        </div>
      )
    })
  }

  renderTiles(row, rowIndx) {
    const board = this.props.board;
    return row.map((tile, colIndx) => {
      return (
        <Tile 
          tile={tile}
          updateGame={this.props.updateGame}
          key={ `tile-${rowIndx * board.gridSize + colIndx }`}/>
      );
    });
  }
}