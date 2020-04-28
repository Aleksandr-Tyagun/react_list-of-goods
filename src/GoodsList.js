import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goodsList],
    lengthsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  handleListReverse = () => {
    this.setState(state => ({
      goodsList: state.goodsList.reverse(),
      reverseDirection: !state.reverseDirection,
    }));
  }

  handleSortAlphabetically = () => {
    this.setState(state => ({
      goodsList: state.goodsList.sort(),
    }));
  }

  handleListReset = () => {
    this.setState({
      goodsList: [...this.props.goodsList],
    });
  }

  handleSortByLength = () => {
    this.setState(state => ({
      goodsList: state.goodsList
        .sort((a, b) => b.length - a.length),
    }));
  }

  handleFilterByLength = (value) => {
    this.setState({
      goodsList: [...this.props.goodsList]
        .filter(item => item.length >= value),
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.goodsList.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.handleListReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.handleSortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.handleListReset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.handleSortByLength}
        >
          Sort by length
        </button>
        <label htmlFor="goods">
          Select item by name length:
        </label>
        <select
          onChange={e => this.handleFilterByLength(e.target.value)}
          id="goods"
        >
          {this.state.lengthsList.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
