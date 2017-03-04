import React, { Component, PropTypes } from 'react';

class Leader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="content-wrapper leader">
        <ul className="leader-list">
          <li className="leader-item">
            <img className="leader-img"  src="" alt="领导照片" />
            <div className="leader-info">
              <h3 className="leader-name">领导名字</h3>
              <p className="leader-desc">
                领导描述
                领导描述
                领导描述
                领导描述
                领导描述
              </p>
            </div>
          </li>
          <li className="leader-item">
            <img className="leader-img"  src="" alt="领导照片" />
            <div className="leader-info">
              <h3 className="leader-name">领导名字</h3>
              <p className="leader-desc">
                领导描述
                领导描述
                领导描述
                领导描述
                领导描述
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Leader;
