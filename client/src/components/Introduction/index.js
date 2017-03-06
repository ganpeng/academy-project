import React, { Component, PropTypes } from 'react';

class Introduction extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="content-wrapper introduction">
        <h2 className="title">华医消化内镜(苏州工业园区)研究院简介</h2>
        <div className="info">
          <img className="image" src={require('../../../images/info_img.png')} alt="华医消化内镜(苏州工业园区)研究院简介" />
          <p className="text">
苏州工业园区作为国内世界级高水准产业园区的典范，20余年来一直引领着国家产业创新的方向，尤其在医疗创新领域所凸显的巨大成就和产业优势，吸引着国内医学行业众多专家学者和企业的目光，纷纷与苏州工业园区寻求合作，近来更有“心鑫心血管健康研究院”等国内顶级医学专家发起的非营利性研究机构在园区成立，在行业内产生了巨大的影响力。有鉴于此，在园区科技局大力支持下，张澍田教授、李鹏教授为代表的消化内镜技术领域的权威专家们，在苏州工业园区发起成立了“华医消化内镜（苏州工业园区）研究院”，李鹏教授担任院长职务。其宗旨为打造全国性的消化疾病防治和消化内镜医学技术领域的“教育培训高地”、“规范诊疗中心认证高地”、“理论发布高地”、“学术交流高地”、“科学研究高地”、“产业创新高地”，将为我国消化内镜产业的发展提供强大的助力，为捍卫人民健康提供的保障。其工作范围包括：教育培训和认证、学术交流、临床医学及转化研究、产业促进和创新、专业诊疗服务。
          </p>
        </div>
      </div>
    );
  }
}

export default Introduction;

