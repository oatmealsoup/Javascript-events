const mouseEventButton = document.getElementById('mouseEventButton')

//MouseEventButton events
mouseEventButton.addEventListener('mouseenter', () => {
  mouseEventButton.textContent = 'Mouse hovered over!';
});

mouseEventButton.addEventListener('mouseleave', () => {
  mouseEventButton.textContent = 'Hover Me!';
});
const text1 = document.getElementById('text');
// Textbox focus events
text1.addEventListener('focus', () => {
    text1.placeholder = 'Start typing...';
});

text1.addEventListener('blur', () => {
    text1.placeholder = 'Click me!';
});

//Set last key typed in lastKey
text1.addEventListener('keydown', (event) => {
  lastKey.textContent = event.key;
});