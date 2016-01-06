import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/index';
import injectLib from './injectLib';

// TODO: 如何动态加载？？
injectLib();

class EventsTimeline extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch( fetchEvents( params._id ) );
  }

  componentDidUpdate() {
    const { events } = this.props;
    window.timeline = new TL.Timeline('timeline-embed', {events}, {
      'start_at_end': 'true',
      'timenav_position': 'top',
      'default_bg_color':	'white',
    });
    // window.onresize = function(event) {
    //     timeline.updateDisplay();
    // };
  }
  render() {

    return (
      <div id='timeline-embed' style={{width: '100%', height: 600}} />
    );
  }
}

function select(state) {
  return {
    events: state.events,
  };
}

export default connect(select)(EventsTimeline);
