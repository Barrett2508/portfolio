const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');
const body = document.querySelector('.hero');
const heading = document.querySelector('h1');
const technologies = document.querySelector('.main-center');
const profilePicture = document.querySelector('.intro img');
const introHeadline = document.querySelector('.about-me h2');
const project = document.querySelector('.projects');
const about = document.querySelector('.about-me')
const aboutParagraph = document.querySelector('.about-paragraph')

let text = introHeadline.textContent;
let characters = text.split('');

lightButton.addEventListener('click', function() {
    body.style.background = 'linear-gradient(45deg, var(--light-main) 33%, var(--light-third)';
    heading.style.color = 'black';
    technologies.style.background = 'linear-gradient(45deg, var(--light-third), var(--light-main) 33%)';
    profilePicture.style.borderColor = '#000000';    
    project.style.background = '#F6F1F1';
    about.style.background = '#19A7CE';
    aboutParagraph.style.color = '#000000';

    darkButton.classList.remove('active');
    lightButton.classList.add('active');
    
  });
  
  darkButton.addEventListener('click', function() {
    body.style.background = 'linear-gradient(45deg, rgb(44, 51, 51) 50%, #0E8388) ';
    heading.style.color = '#F6F1F1';
    technologies.style.background = 'linear-gradient(45deg, #0E8388, rgb(44, 51, 51) 50%) ';
    profilePicture.style.borderColor = '#F6F1F1';
    project.style.background = 'rgb(44, 51, 51)';
    about.style.background = '#0E8388';
    aboutParagraph.style.color = '#F6F1F1';
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