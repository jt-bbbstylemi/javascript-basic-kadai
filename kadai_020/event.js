const pushBtn = document.getElementById('btn');

pushBtn.addEventListener('click', () => {
  const textMessage = document.getElementById('text');
  textMessage.textContent = 'ボタンをクリックしました';
});

