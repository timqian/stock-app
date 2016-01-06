import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';

export default class TreeView extends Component {
  render() {
    const sideMenu = {
        /* To limit the menu width to the content of the menu: */
        //display: 'inline-block',
        /* Or set the width explicitly: */
        /* width: 10em; */
        borderRight: '1px solid #eee',
    };
    const { _id } = this.props;

    // TODO: use `window.location` and `classnames` to decide whether a <li> is `pure-menu-selected`
    return (
      <div className="pure-menu" style={sideMenu}>
        {/*<span className="pure-menu-heading">相关信息</span>*/}
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to={`/oneStock/${_id}/eventsTimeline`}
              className="pure-menu-link">
              重大事件
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to={`/oneStock/${_id}/bigMoneys`}
              className="pure-menu-link">
              大资金
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
