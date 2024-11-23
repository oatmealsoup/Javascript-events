const mouseEventButton = document.getElementById('mouseEventButton')
//MouseEventButton events
mouseEventButton.addEventListener('mouseenter', () => {
  mouseEventButton.textContent = 'Click to submit!';
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

const lastKey = document.getElementById('lastKey');
//Set last key typed in lastKey
text1.addEventListener('keydown', (event) => {
  lastKey.textContent = event.key;
});

const form1 = document.getElementById('form1');
// Form Submission
form1.addEventListener('submit', (event) => {
	console.log('Form submitted');
	event.preventDefault();
	alert(`${text.value}`);
});
