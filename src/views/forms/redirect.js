const redirect = history => {
  const id = sessionStorage.getItem('token');
  history.push(`/admin/all-articles/${id}`);
};

export default redirect;
