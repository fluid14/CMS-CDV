import axios from 'axios';
import { useHistory } from 'react-router';

const editArticle = (articleId, pageType, data) => {
  axios
    .put('http://127.0.0.1:5000/article', {
      id: `${articleId}`,
      page_type: `${pageType}`,
      content: data,
    })
    .then(response => {
      console.log(response);
      const history = useHistory();
      history.push('/blog');
    })
    .catch(err => {
      console.log(err);
    });
};

export default editArticle;
