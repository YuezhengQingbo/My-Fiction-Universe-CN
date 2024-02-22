const responsiveBox = document.getElementById('responsive-box');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const xOffset = (clientX / window.innerWidth - 0.5) * 2;
  const yOffset = (clientY / window.innerHeight - 0.5) * 2;

  responsiveBox.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${yOffset * 10}deg) rotateY(${xOffset * 10}deg)`;
});