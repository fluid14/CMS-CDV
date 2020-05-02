import axios from 'axios';

const getArticle = (setState, id) => {
  axios
    .get(`http://127.0.0.1:5000/article/${id}`)
    .then(article => {
      setState(article.data.content);
    })
    .catch(err => console.log(err));
};

export default getArticle;
