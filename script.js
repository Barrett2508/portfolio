const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');
const body = document.querySelector('body');
const heading = document.querySelector('h1');
const technologies = document.querySelector('.main-center');
const profilePicture = document.querySelector('.intro img');
const introHeadline = document.querySelector('.about-me h2');

let text = introHeadline.textContent;
let characters = text.split('');

lightButton.addEventListener('click', function() {
    body.style.backgroundColor = 'white';
    heading.style.color = 'black';
    technologies.style.backgroundColor = 'rgb(0, 179, 255)';
    profilePicture.style.borderColor = 'rgb(0, 179, 255)';
    darkButton.classList.remove('active');
    lightButton.classList.add('active');
    
  });
  
  darkButton.addEventListener('click', function() {
    body.style.backgroundColor = 'rgb(37, 37, 37)';
    heading.style.color = '#fff';
    technologies.style.backgroundColor = 'rgb(0, 179, 255)';
    profilePicture.style.borderColor = 'rgb(0, 179, 255)';
    darkButton.classList.add('active');
    lightButton.classList.remove('active');
  });

  const panels = document.querySelectorAll('.panel')
  const panelLive = document.querySelector('.live')
  const panelSource = document.querySelector('.source')

  panels.forEach((panel) => {
      panel.addEventListener('click', () => {
          removeActiveClasses()
          panel.classList.add('active');
          panelLive.classList.add('active');
          panelSource.classList.add('active');
      })
  })
  
  function removeActiveClasses() {
      panels.forEach((panel) => {
          panel.classList.remove('active');
          panelLive.classList.remove('active');
          panelSource.classList.remove('active');
      })
  }