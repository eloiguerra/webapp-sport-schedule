export const login = (response) => {
  localStorage.setItem('login', response.data)
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
