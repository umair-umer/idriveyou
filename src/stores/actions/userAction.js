const updateUser = user => {
  // console.log('userrrrrrrrrrrrrr', user);
  return {
    type: 'UPDATE_USER',
    user,
  };
};
const userRole = res => {
  // console.log('userrrrrrrrrrrrrr', user);
  return {
    type: 'USER_ROLE',
    res,
  };
};

const removeUser = remove => {
  return {
    type: 'REMOVE_USER',
    user: '',
  };
};

export {updateUser, userRole, removeUser};
