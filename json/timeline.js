// ===== Datos =====
const proyectos = [

  {
    año: '2026',
    empresa: 'Advisorsy Robotización SL',
    titulo: 'QA & Analyst',
    desc: 'Startup especializado en el desarrollo de soluciones de automatización de procesos para el sector asesorías. Funciones realizadas como QA Analyst',
    tareas: [
      'Implementación del sistema de calidad desde cero: definición de procesos, estándares y métricas QA',
      'Creación de test plans, casos de test y suites de regresión adaptados al producto',
      'Análisis funcional de negocio y de la aplicación: levantamiento de requisitos y documentación funcional',
      'Ejecución de pruebas de la aplicación y gestión de incidencias mediante ticketing',
      'Reportes de calidad',
      'Soporte técnico y onboarding a clientes: formación, resolución de dudas y acompañamiento en el arranque'
    ]
  },
  
  {
    año: '2024 - 2025',
    empresa: 'Capgemini',
    titulo: 'QA Test Lead',
    desc: 'Proyecto NCSF. Sector transporte.',
    tareas: [
      'Liderazgo del equipo QA',
      'Coordinación del equipo QA y planificación estratégica de campañas de test',
      'Diseño y ejecución de pruebas funcionales y no funcionales (regresión, humo, integración) con Squash',
      'Interlocución directa con cliente y gestión de requisitos con validación del producto',
      'Gestión de incidencias y seguimiento de bugs con Jira',
      'Presentación de resultados, métricas de calidad y mejoras al equipo de gestión'
    ]                                          
  },

  {
    año: '2024 - 2024',
    empresa: 'Sopra Steria',
    titulo: 'QA Tester',
    desc: 'Allianz: Sector seguros, aseguradora de vehículos y hogar.', 
    grupo: 'sopra',
    tareas: [
        'Creación y ejecución de planes de test con XRay', 
        'Gestión de incidencias y seguimiento de bugs con Jira',
        'Organización de reuniones de planificación y seguimiento del testing',
        'Generar informes de testing y análisis de calidad',
    ]
 },
    {
    año: '2022 - 2024',
    empresa: 'Sopra Steria',
    titulo: 'QA Tester y Business Analyst',
    desc: 'GRDF: Sector energia, distribución de gas natural en Francia.', 
    grupo: 'sopra',
    tareas: [
            'Validación de funcionalidades en aplicaciones web, tablets y PDAs en sectores regulados',
            'Creación y ejecución de planes de test con HP ALM',
            'Gestión de incidencias y seguimiento de bugs con HP ALM',
            'Elaboración de documentación funcional y técnica: BRS, FRS, casos de uso, flujos BPMN',
            'Análisis de requisitos con stakeholders y traducción a especificaciones técnicas o funcionales para desarrollo mediante User Stories en Jira',
            'Realizar presentaciones sobre las propuestas de mejora y desarollo a los stakeholders'
        ] 
},
    {
    año: '2017 - 2022',
    empresa: 'Sopra Steria',
    titulo: 'QA Tester y Business Analyst',
    desc: 'Informática interna. Aplicaciones internas de la empresa para gestión de clientes, colaboradores, facturas, etc.',
    grupo: 'sopra',
        tareas: [
            'Creación y ejecución de planes de test con HP QC y Azure DevOps Test Plan',
            'Ejecución de pruebas manuales del Front-End de las aplicaciones y Back-Endd mediante Postman, SoapUI y Swagger, incluyendo la validación de datos con consultas SQL',
            'Automatización de pruebas existentes con framework de automatización Selenium',
            'Redacción de la documentación de especificaciones funcionales y técnicas (BRS, FRS, casos de uso)',
            'Análisis de requisitos con stakeholders y traducción a especificaciones técnicas o funcionales   mediante User Stories en AzureDevops para desarrollo',
            'Seguimiento de incidencias, priorización con el PO y formación a nuevos miembros del equipo',
            'Gestión del backlog y coordinación de equipos técnicos multidisciplinares',
            'Realizar demos sobre las funcionalidades desarrolladas ',
            'Generar informes de testing y análisis de calidad'
        ]
  }
];

// ===== Generar items =====
const timeline = document.getElementById('timeline');

proyectos.forEach(p => {
  const item = document.createElement('div');
  item.className = 'tl-item' + (p.grupo ? ` tl-item--${p.grupo}` : '');
  item.innerHTML = `
    <div class="tl-card">
      <span class="year">${p.año} · ${p.empresa}</span>
      <h3>${p.titulo}</h3>
      <p>${p.desc}</p>

      <button class="tl-toggle" aria-expanded="false">
        Ver funciones <span class="tl-arrow">▾</span>
      </button>
      <div class="tl-content">
        <ul class="tl-list">
          ${p.tareas.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  timeline.appendChild(item);
});    

// ===== Animación al hacer scroll =====
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.2 }
);

document.querySelectorAll('.tl-item').forEach(el => observer.observe(el));

// ===== Toggle accordion =====
function initToggles() {
  document.querySelectorAll('.tl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      content.classList.toggle('open');
      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
    });
  });
}

initToggles();   