import React, { Component, PropTypes } from 'react';

class ExpertTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { experts } = this.props

    const expertsTable = experts.map((expert) => {
      return <tr key={expert.id}><td>{expert.post}</td><td>{expert.name}</td><td>{expert.workplace}</td></tr>;
    })

    return (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  委员会职务
                </th>
                <th>
                  姓名
                </th>
                <th>
                  工作单位及名称
                </th>
              </tr>
            </thead>
            <tbody>
              { expertsTable }
            </tbody>
          </table>
        </div>
    );
  }
}

export default ExpertTable;
