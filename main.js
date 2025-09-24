onload = () =>{
    document.body.classList.remove("container");
};
window.addEventListener('load', () => {
  const titulo = document.querySelector('.titulo');
  if (titulo) titulo.classList.add('visible'); // fade-in del título

  // activar las flores 13s después
  setTimeout(() => {
    document.querySelector('.flores-contenedor').classList.add('iniciar');
  }, 15000); // 13000 ms = 13 segundos
});

