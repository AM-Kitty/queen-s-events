﻿import { connect } from 'react-redux'
import {
  loadSignUp,
  updateSignUpInfo,
  TOGGLE_PROFILE_HIDDEN
} from '../../actions/index'
import ProfileEdit from './ProfileEdit.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()
      dispatch(updateSignUpInfo())
    },
    onChange: event => {
      const {name, value} = event.target
      dispatch(updateSignUpInfo({ name, value }))
    }
  })
}

const ProfileEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEdit)

export default ProfileEditContainer