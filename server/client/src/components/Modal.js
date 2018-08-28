import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalAction';
import SurveyContainer from './survey/survey_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'survey':
      component = <SurveyContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-bg' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const msp = ({ modal }) => ({
  modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);