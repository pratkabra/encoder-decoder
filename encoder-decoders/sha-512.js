const input = document.querySelector('#input');
const output = document.querySelector('#output');
const encodeButton = document.querySelector('#encode-btn');

encodeButton.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  const hash = CryptoJS.SHA512(input.value).toString();
  output.value = hash;
});
