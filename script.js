const mouseEventButton = document.getElementById('mouseEventButton')

//MouseEventButton events
mouseEventButton.addEventListener('mouseenter', () => {
  mouseEventButton.textContent = 'Mouse hovered over!';
});

mouseEventButton.addEventListener('mouseleave', () => {
  mouseEventButton.textContent = 'Hover Me!';
});