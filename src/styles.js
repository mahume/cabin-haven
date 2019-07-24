export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGray: '#ececec',
  lightGray: '#f7f7f7',
}

export const setFont = {
  main: "'Lato', sans-serif;",
}

export const setFlex = ({x = 'center', y = 'center'} = {}) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `
}

export const setBackground = ({img, color} = {}) => {
  return `
    background: linear-gradient(${color}, ${color}), url(${img});  
    background-position: center;
    background-origin: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  `
}