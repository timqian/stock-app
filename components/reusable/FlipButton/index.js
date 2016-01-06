import React, { Component, PropTypes } from 'react';
import injectStyle from './injectStyle';

injectStyle();

export default class FlipButton extends Component {

  render() {
    let { id, offWord, onWord } = this.props;

    return (
      <span>
        <input className='react-tgl react-tgl-flip' id={id} type='checkbox'>
        </input>
        {/*for is reserved:
          http://stackoverflow.com/questions/29161330/react-js-ignores-labels-for-attribute*/}
        <label htmlFor = {id} className = 'react-tgl-btn' data-tg-on = {offWord}
        data-tg-off = {onWord} ></label>
      </span>
    );
  }
}
