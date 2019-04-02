/* eslint-disable react/no-did-mount-set-state */
// @Flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterComponent from './RegisterComponent';
import * as actionCreators from '../actionCreators';
import * as selectors from '../selectors';

const mapStateToProps = () => ({
});

class RegisterContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      familyname: '',
      city: '',
      gender: 'male',
      isSmoker: false,
      about: '',
      birthday: '',
      loading: false
    };
  }

  _handleChangeName = (name: string) => {
    this.setState({ name });
  };

  _handleChangeFamilyname = (familyname: string) => {
    this.setState({ familyname });
  };

  _handleChangeCity = (city: string) => {
    this.setState({ city });
  };

  _handleChangeGender = (gender: string) => {
    this.setState({ gender });
  };

  _handleChangeIsSmoker = (isSmoker: boolean) => {
    this.setState({ isSmoker });
  };

  _handleChangeAbout = (about: string) => {
    this.setState({ about });
  };

  _handleChangeBirthday = (birthday: string) => {
    this.setState({ birthday });
  };

  _handleClickSubmit = async () => {
    const { dispatch } = this.props;
    const { name, familyname, city, gender, isSmoker, about, birthday } = this.state;
    this.setState({ loading: true });
    await dispatch(actionCreators.register(name, familyname, city, gender, isSmoker, about, birthday));
    this.setState({ loading: false });
  };


  render() {
    const { name, familyname, city, gender, isSmoker, about, birthday, loading } = this.state;

    return (
      <RegisterComponent
        name={name}
        handleChangeName={this._handleChangeName}
        familyname={familyname}
        handleChangeFamilyname={this._handleChangeFamilyname}
        city={city}
        handleChangeCity={this._handleChangeCity}
        gender={gender}
        handleChangeGender={this._handleChangeGender}
        isSmoker={isSmoker}
        handleChangeIsSmoker={this._handleChangeIsSmoker}
        about={about}
        handleChangeAbout={this._handleChangeAbout}
        birthday={birthday}
        handleChangeBirthday={this._handleChangeBirthday}
        loading={loading}
        handleClickSubmit={this._handleClickSubmit}
      />
    );
  }

}

RegisterContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(RegisterContainer);
