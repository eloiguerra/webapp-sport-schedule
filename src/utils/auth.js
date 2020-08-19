export const login = (response) => {
  localStorage.setItem('login', JSON.stringify({
    login: true,
    token: response.data
  }))
}

export const logout = () => {
  localStorage.removeItem('login');
}

export const isLogin = () => {
  if (localStorage.getItem('login')) {
      return true;
  }

  return false;
}
