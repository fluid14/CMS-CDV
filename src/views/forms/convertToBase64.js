const getBase64 = file => {
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

const convertToBase64 = (ev, state, changeState) => {
  let { file } = state;
  file = ev.target.files[0];
  getBase64(file)
    .then(result => {
      file['base64'] = result;
      changeState(result);
    })
    .catch(err => {
      console.log(err);
    });
};

export default convertToBase64;
