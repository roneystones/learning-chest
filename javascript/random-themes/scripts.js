document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  document.body.classList.add('unloaded');
  document.body.style.opacity = '';
});

window.onload = () => {
  const themes = [
    ["#7F583F", "#F7EFD2"],
    ["#D51522", "#F4F6D8"],
    ["#395315", "#DDE512"],
    ["#36470C", "#F0DF5E"],
    ["#395170", "#B3D9FA"],
    ["#1D6431", "#B1EAEA"],
    ["#363934", "#EED3C7"],
    ["#1C1B23", "#FFCD06"],
    ["#2E3506", "#99C4FF"],
  ];

  const index = Math.floor(Math.random() * themes.length);
  const theme = themes[index];

  document.body.style.setProperty('--primary', theme[0]);
  document.body.style.setProperty('--secondary', theme[1]);

  document.getElementById('leet').style.backgroundImage = `url('img/${ index + 1 }.jpg')`;

  document.body.classList.remove('unloaded');
}
