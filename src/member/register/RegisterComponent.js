// @Flow
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Paper, Typography, MenuItem, Select, FormControlLabel, OutlinedInput, Checkbox, Button } from '@material-ui/core';

class RegisterComponent extends React.Component {

  render() {
    const { loading, handleClickSubmit, name, handleChangeName, familyname, handleChangeFamilyname, about, birthday, city, gender, handleChangeAbout, handleChangeBirthday, handleChangeCity, handleChangeGender, handleChangeIsSmoker, isSmoker } = this.props;

    return (
      <center>
        <Paper style={{ padding: 20 }} elevation={1}>
          <Typography variant="h5" component="h3">
            S'inscrire
          </Typography>
          <Typography component="p">
            Veuillez vous inscrire
          </Typography>
          <div>
            <TextField
              label="Prénom"
              value={name}
              onChange={(e) => handleChangeName(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <br/>
            <TextField
              label="Nom"
              value={familyname}
              onChange={(e) => handleChangeFamilyname(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <br/>
          </div>
          <TextField
            label="Date de naissance"
            value={birthday}
            onChange={(e) => handleChangeBirthday(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <br/>
          <TextField
            label="Ville de résidence"
            value={city}
            onChange={(e) => handleChangeCity(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <br/>

          <Select
            value={gender}
            onChange={(e) => handleChangeGender(e.target.value)}
            input={
              <OutlinedInput />
            }
          >
            <MenuItem value="male">Homme</MenuItem>
            <MenuItem value="female">Femme</MenuItem>
          </Select>
          <br/>

          <FormControlLabel
            control={
              <Checkbox
                checked={isSmoker}
                onChange={(e) => handleChangeIsSmoker(e.target.checked)}
                color="primary"
              />
            }
            label="En voiture, je fumes"
          />
          <br />

          <TextField
            label="A propos"
            value={about}
            onChange={(e) => handleChangeAbout(e.target.value)}
            margin="normal"
            variant="outlined"
            multiline
          />
          <br />

          <Button disabled={loading} onClick={() => handleClickSubmit()} variant="contained" color="primary">
            {loading ? 'Chargement...' : 'Valider'}
          </Button>
        </Paper>
      </center>
    );
  }
}

RegisterComponent.propTypes = {
  name: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  familyname: PropTypes.string.isRequired,
  handleChangeFamilyname: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  handleChangeCity: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  handleChangeGender: PropTypes.func.isRequired,
  isSmoker: PropTypes.bool.isRequired,
  handleChangeIsSmoker: PropTypes.func.isRequired,
  about: PropTypes.string.isRequired,
  handleChangeAbout: PropTypes.func.isRequired,
  birthday: PropTypes.string.isRequired,
  handleChangeBirthday: PropTypes.func.isRequired,
  handleClickSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default RegisterComponent;
