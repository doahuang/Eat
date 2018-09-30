import { connect } from 'react-redux';

import ShopPage from './shop_page';

import { callYelp } from '../../actions/yelp_actions';
import { getLikes } from '../../actions/like_actions';

const msp = ({ session, ui: { filters }}, ownProps) => {
  const url = ownProps.location.search;

  return {
    user: !!session,
    filters, 
    url
  }
}

const mdp = dispatch => ({
  callYelp: params => dispatch(callYelp(params)), 
  getLikes: params => dispatch(getLikes(params))
});

export default connect(msp, mdp)(ShopPage);