import React, { Component, PropTypes } from 'react';

import Pagination from '../Pagination/';
import { api_root } from '../../constants/';


class Leader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.props.getLeaders(1);
  }


  render() {
    const { leaders, leaderPagination, getLeaders } = this.props;
    const len = leaders.length;
    return (
      <div className="content-wrapper leader">
        <ul className="leader-list">
          {
            leaders.map((leader) => {
              return (
                <li key={leader._id} className="leader-item">
                  <img className="leader-img"  src={`${api_root}/${leader.image}`} alt="领导照片" />
                  <div className="leader-info">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-desc">{leader.desc}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        {
          len > 0 ? <Pagination {...leaderPagination} gotoPage={getLeaders} /> : null
        }
      </div>
    );
  }
}

export default Leader;
