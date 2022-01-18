const printErrorMsg = (message) => {
  const errMsg = document.querySelector('.err-msg');
  errMsg.style.color = 'red';
  document.querySelector('.err-msg').textContent = message;
  setTimeout(() => {
    document.querySelector('.err-msg').textContent = '';
  }, 2000);
};

const addBtn = document.querySelector('.add-btn');

export { printErrorMsg, addBtn };