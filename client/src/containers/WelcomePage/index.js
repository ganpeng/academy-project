import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Welcome from '../../components/Welcome/';
import { getShowCarousels } from '../../actions/carousel';
import { api_root } from '../../constants/';

class WelcomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      showCarousels: []
    }
  }

  componentDidMount() {
    this.props.getShowCarousels()
      .then((data) => {
        if (data.success === 'ok') {
          const showCarousels = data.result.carousels.map((carousel) => {
            return {
              original: `${api_root}/${carousel.image}`
            }
          })

          this.setState({showCarousels})
        }
      })
  }



  render() {
    const { showCarousels } = this.state;
    return (
      <Welcome images={showCarousels} />
    );
  }
}


export default connect(null, { getShowCarousels })(WelcomePage);
