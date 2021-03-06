import { connect } from 'react-redux';

import Loader from '../../components/loader';

const mapStateToProps = state => {
  return {
    show: state.loader.isLoading,
  };
};

export default connect(mapStateToProps)(Loader);
