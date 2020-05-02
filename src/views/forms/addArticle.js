import axios from 'axios';
import redirect from './redirect';

const addArticle = (userId, pageType, data, history) => {
  axios
    .post('http://127.0.0.1:5000/add-article', {
      user_id: `${userId}`,
      page_type: `${pageType}`,
      content: data,
    })
    .then(response => {
      console.log(response);
      redirect(history);
    })
    .catch(err => {
      console.log(err);
    });
};

export default addArticle;
