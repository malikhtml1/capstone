document.querySelectorAll('.accordion-header').forEach(function(button) {
  button.addEventListener('click', function () {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.accordion-content').forEach(function (panel) {
      panel.style.maxHeight = null;
      panel.classList.remove('open');
      panel.previousElementSibling.classList.remove('active');
    });
      button.classList.add('active');

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      button.classList.add('active');
    }
  });
});

