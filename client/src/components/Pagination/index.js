import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';

class Pagination extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  gotoFirst() {
    this.props.gotoPage(1);
  }

  gotoLast() {
    const { currentPage, pages } = this.props
    this.props.gotoPage(pages);
  }

  gotoPrev() {
    const { currentPage, pages } = this.props
    this.props.gotoPage(currentPage - 1);
  }

  gotoNext() {
    const { currentPage, pages } = this.props
    this.props.gotoPage(currentPage + 1);
  }

  gotoPage(page) {
    this.props.gotoPage(page + 1);
  }


  render() {
    const { pages, currentPage } = this.props;

    let p = _.range(pages).map((i) => {
      if ((i + 1) === currentPage) {
        return <span className="page-item active" key={i + 1} onClick={() => { return false; }} >{i + 1}</span>
      }
      return <span className="page-item" key={i + 1} onClick={this.gotoPage.bind(this, i)} >{i + 1}</span>
    })
    return (
      <div className="pagination">
        {currentPage === 1 ? (<span className="first disabled">首页</span>) : (<span className="first" onClick={this.gotoFirst.bind(this)}>首页</span>) }
        {currentPage === 1 ? (<span className="prev disabled">上一页</span>) : (<span className="prev" onClick={this.gotoPrev.bind(this)}>上一页</span>) }
        {p}
        {currentPage === pages ? (<span className="next disabled">下一页</span>) : (<span className="next" onClick={this.gotoNext.bind(this)}>下一页</span>)}
        {currentPage === pages ? (<span className="last disabled">尾页</span>) : (<span className="last" onClick={this.gotoLast.bind(this)}>尾页</span>)}
      </div>
    );
  }
}

export default Pagination;
