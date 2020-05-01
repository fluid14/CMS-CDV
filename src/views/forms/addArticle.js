import axios from 'axios';

const addArticle = (userId, pageType, data) => {
  axios
    .post('http://127.0.0.1:5000/add-article', {
      user_id: `${userId}`,
      page_type: `${pageType}`,
      content: data,
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};

export default addArticle;
