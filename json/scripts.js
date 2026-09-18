document.addEventListener('DOMContentLoaded', function() {


const headerHTML = `
    <header>
        <h1 class="title-header">Émili Prieto Antón</h1>
        <h2 class="subtitle-header">QA & Business Analyst Senior</h2>
        <h3 class="subtitle-header"> En transición a Test Automation con Playwright</h3>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">Sobre mi</a>
            <a href="projects.html">Proyectos</a>
            <a href="skills.html">Habilidades</a>
            <a href="tools.html">Herramientas</a>
            <a href="contact.html">Contacto</a>
           <div class="animation start-home"></div>
        </nav>
    </header>`;

const footerHTML = `
    <footer>
       <p>&copy; 2026 Mi Portfolio. Todos los derechos reservados. Versión 1.0</p>
    </footer>`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);


    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const classMap = ['start-home','start-about','start-blog','start-portefolio','start-tools','start-contact'];   
    const links = document.querySelectorAll('nav a');

    links.forEach(function(link, i) {
        if (link.getAttribute('href') === currentPage) {
            document.querySelector('nav .animation').className = 'animation ' + classMap[i];
        }
    });

});