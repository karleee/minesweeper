import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const flagged = event.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render() {
    const tile = this.props.tile;
    let status, text, count;
    if (tile.explored) {
      if (tile.bombed) {
        status = 'bombed';
        text = '\u2622';
      } else {
        status = 'explored';
        count = tile.adjacentBombCount();
        text = count > 0 ? `${ count }` : '';
      }
    } else if (tile.flagged) {
      status = 'flagged';
      text = '\u2691';
    } else {
      status = 'unexplored';
    }
    status = `tile ${ status }`;
    return (
      <div className={ status } onClick={ this.handleClick }>{ text }</div>
    );
  }
}