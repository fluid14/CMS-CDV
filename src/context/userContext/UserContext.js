import React from 'react';

const UserContext = React.createContext({
  userContext: {
    username: '',
    id: '',
    role: '',
  },
});

export default UserContext;
