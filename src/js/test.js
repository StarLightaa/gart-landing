export default () => {
  const fields = document.querySelectorAll('.form__field input');
  if(fields.length == 0) {
    return;
  }
  fields.forEach(field => {
    field.addEventListener('focus', (e) => {
      e.target.parentElement.dataset.focus = 'focused';
    })

    field.addEventListener('blur', (e) => {
      e.target.parentElement.dataset.focus = '';
    })
  });
};
