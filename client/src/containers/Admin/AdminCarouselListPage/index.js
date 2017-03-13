import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getCarousels, deleteCarouselRequest, deleteCarousel, updateCarouselRequest, updateCarousel } from '../../../actions/carousel';
import CarouselTable from '../../../components/Admin/CarouselTable/';
import MyPagination from '../../../components/Admin/MyPagination/';

class AdminCarouselListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.props.getCarousels(1);
  }


  render() {
    const { carousels, getCarousels, pagination, deleteCarouselRequest, deleteCarousel, updateCarousel, updateCarouselRequest } = this.props;
    const { currentPage, total } = pagination.carouselPagination;
    return (
      <div className="admin-carousel-list" style={{minHeight:"460px"}}>
        <CarouselTable dataSource={carousels} deleteCarouselRequest={deleteCarouselRequest} deleteCarousel={deleteCarousel} updateCarouselRequest={updateCarouselRequest} updateCarousel={updateCarousel} />
        <MyPagination gotoPage={getCarousels} currentPage={currentPage} total={total} />
      </div>
    );
  }
}

function mapStatesToProps(state) {
  return {
    carousels: state.carousels,
    pagination: state.pagination
  }
}




export default connect(mapStatesToProps, { getCarousels, deleteCarouselRequest, deleteCarousel, updateCarousel, updateCarouselRequest })(AdminCarouselListPage);
