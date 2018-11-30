export const selectUser = user => {
  console.log('SelectUser action creator called');
  console.log('Clicked on user ' + user.first);
  return {
      type: 'USER SELECTED',
      payload: user
  }
};