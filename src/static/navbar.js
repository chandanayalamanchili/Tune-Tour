const linker = document.querySelectorAll('.navbar a');
linker.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'white';
    link.style.backgroundColor = '#a1a1a1';
  });
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('active')) {
      link.style.color = '#efefef';
      link.style.backgroundColor = 'transparent';
    }
  });
  if (link.classList.contains('active')) {
    link.style.color = 'white';
    link.style.backgroundColor = '#a1a1a1';
  }
});