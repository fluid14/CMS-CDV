import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledInput from '../text/Input/Input';

class AddImage extends Component {
  state = {
    file: null,
    base64URL: '',
  };

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = '';
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  handleFileInputChange = e => {
    let { file } = this.state;
    file = e.target.files[0];
    this.getBase64(file)
      .then(result => {
        file['base64'] = result;
        this.setState({
          base64URL: result,
          file,
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    const { name, onBlur } = this.props;
    return (
      <StyledInput
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        onBlur={onBlur}
        onChange={this.handleFileInputChange}
        required
      />
    );
  }
}

AddImage.propTypes = {
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default AddImage;
