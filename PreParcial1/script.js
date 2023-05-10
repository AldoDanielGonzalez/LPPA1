
// Variable global para controlar si se cambió a color negro o no
let isBlack = false;

// Función para cambiar el color de fondo y el color del texto a negro o blanco según el estado actual
function changeToBlack() {
  const body = document.body;
  if (!isBlack) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    isBlack = true;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    isBlack = false;
  }
}
  
let isEnglish = false;

  function switchLanguage() {
    const titles = document.querySelectorAll(".CajaFlotanteDerecha h3");
    const paragraphs = document.querySelectorAll(".seccion1 p");
  
    if (isEnglish) {
      // Cambiar a español
      titles.forEach(title => {
        title.innerText = getSpanishTitle(title.innerText);
      });
  
      paragraphs.forEach(paragraph => {
        paragraph.innerText = getSpanishParagraph(paragraph.innerText);
      });
  
      isEnglish = false;
      englishBtn.innerText = "Switch to English";
    } else {
      // Cambiar a inglés
      titles.forEach(title => {
        title.innerText = getEnglishTitle(title.innerText);
      });
  
      paragraphs.forEach(paragraph => {
        paragraph.innerText = getEnglishParagraph(paragraph.innerText);
      });
  
      isEnglish = true;
      englishBtn.innerText = "Cambiar a Español";
    }
  }
  
  function getEnglishTitle(spanishTitle) {
    return "Use Keywords";
  }
  
  function getSpanishTitle(spanishTitle) {
    return "Usa Palabras Clave";
  }
  
  function getEnglishParagraph(spanishParagraph) {
    return "This will allow you to appear more effectively in search engines. If you're writing about an event or a big story, mention the event at the front of the headline. Skip unnecessary words. Do not go into details of the owner information.";
  }
  
  function getSpanishParagraph(spanishParagraph) {
    return "Esto permitirá que aparezca de manera más efectiva en los motores de búsqueda. Si estás escribiendo sobre un evento o una gran historia, menciona el suceso en la parte delantera del titular. Omite las palabras innecesarias. No entres en detalles de la información titular.";
  }
  

  const blackBtn = document.querySelector("#blackBtn");
  blackBtn.addEventListener("click", changeToBlack);
  
  const englishBtn = document.querySelector("#englishBtn");
  englishBtn.addEventListener("click", switchLanguage);
  