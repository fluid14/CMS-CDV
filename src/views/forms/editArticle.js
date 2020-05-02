import axios from 'axios';
import redirect from './redirect';

const editArticle = (articleId, pageType, data, history) => {
  axios
    .put('http://127.0.0.1:5000/article', {
      id: `${articleId}`,
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

export default editArticle;
