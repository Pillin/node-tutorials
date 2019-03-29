const checkUsersValid = goodUsers =>
  function allUsersValid(submittedUsers) {
    return submittedUsers.every(elem =>
      goodUsers.some(user => user.id === elem.id)
    );
  };

module.exports = checkUsersValid;
