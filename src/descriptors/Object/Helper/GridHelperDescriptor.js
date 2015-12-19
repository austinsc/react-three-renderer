import THREE from 'three.js';
import Object3DDescriptor from '../Object3DDescriptor';
import PropTypes from 'react/lib/ReactPropTypes';

class GridHelperDescriptor extends Object3DDescriptor {
  constructor(react3Instance) {
    super(react3Instance);
debugger;
    this.propTypes = {
      ...this.propTypes,

      size: PropTypes.number,
      step: PropTypes.number,
    };
  }

  applyInitialProps(threeObject:THREE.Object3D, props) {
    super.applyInitialProps(threeObject, props);
  }

  construct(props) {
    debugger;
    const {
      size,
      step,
      } = props;
    return new THREE.GridHelper(size, step);
  }

  unmount(threeObject) {
    threeObject.geometry.dispose();
    threeObject.material.dispose();

    super.unmount(threeObject);
  }
}

export default GridHelperDescriptor;
