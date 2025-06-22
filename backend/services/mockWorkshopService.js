// ./backend/services/mockWorkshopService.js

// Mock data for development - Talleres Ciberistas TecMty
const mockWorkshops = [
  {
    id: 1,
    group_id: 1,
    name: "Programación Básica con Python",
    format: "Presencial",
    date_id: 1,
    date: "2025-03-15",
    start_time: "09:00:00",
    end_time: "12:00:00",
    capacity: 25,
    current: 18,
    teached_by: "Dr. María Fernández",
    description: "Introducción a la programación utilizando Python. Los estudiantes aprenderán conceptos fundamentales como variables, ciclos, condicionales y funciones a través de proyectos divertidos y desafiantes.",
    ages: "12-17",
    requisites: "Ninguno, solo ganas de aprender",
    objective: "Desarrollar habilidades básicas de programación y lógica computacional",
    gender: "Mixto",
    location: "Campus Monterrey, Laboratorio de Cómputo A",
    available: true
  },
  {
    id: 2,
    group_id: 2,
    name: "Desarrollo Web Frontend",
    format: "Híbrido",
    date_id: 2,
    date: "2025-03-22",
    start_time: "14:00:00",
    end_time: "17:00:00",
    capacity: 20,
    current: 15,
    teached_by: "Ing. Roberto Sánchez",
    description: "Crea páginas web interactivas usando HTML5, CSS3 y JavaScript. Los participantes desarrollarán su propia página web personal con diseño responsivo.",
    ages: "13-18",
    requisites: "Conocimientos básicos de computación",
    objective: "Crear páginas web modernas y responsivas",
    gender: "Mixto",
    location: "Campus Estado de México / Virtual",
    available: true
  },
  {
    id: 3,
    group_id: 3,
    name: "Introducción a la Inteligencia Artificial",
    format: "Virtual",
    date_id: 3,
    date: "2025-03-29",
    start_time: "10:00:00",
    end_time: "13:00:00",
    capacity: 30,
    current: 22,
    teached_by: "Dra. Lucia Morales",
    description: "Explora el fascinante mundo de la IA. Los estudiantes aprenderán sobre machine learning, redes neuronales y desarrollarán un proyecto de clasificación de imágenes.",
    ages: "14-18",
    requisites: "Conocimientos básicos de matemáticas",
    objective: "Comprender los fundamentos de la inteligencia artificial",
    gender: "Mixto",
    location: "Plataforma Zoom",
    available: true
  },
  {
    id: 4,
    group_id: 4,
    name: "Robótica y Arduino",
    format: "Presencial",
    date_id: 4,
    date: "2025-04-05",
    start_time: "09:00:00",
    end_time: "16:00:00",
    capacity: 15,
    current: 12,
    teached_by: "Ing. David López",
    description: "Construye y programa robots usando Arduino. Los participantes trabajarán con sensores, motores y actuadores para crear proyectos de robótica educativa.",
    ages: "12-17",
    requisites: "Interés en electrónica básica",
    objective: "Desarrollar habilidades en robótica y programación de microcontroladores",
    gender: "Mixto",
    location: "Campus Guadalajara, Laboratorio de Robótica",
    available: true
  },
  {
    id: 5,
    group_id: 5,
    name: "Diseño de Videojuegos con Unity",
    format: "Presencial",
    date_id: 5,
    date: "2025-04-12",
    start_time: "13:00:00",
    end_time: "17:00:00",
    capacity: 20,
    current: 8,
    teached_by: "Mtro. Andrea González",
    description: "Crea tu primer videojuego usando Unity. Los estudiantes aprenderán sobre game design, programación en C# y desarrollo de mecánicas de juego.",
    ages: "13-18",
    requisites: "Conocimientos básicos de programación",
    objective: "Desarrollar un videojuego funcional y publicable",
    gender: "Mixto",
    location: "Campus Ciudad de México, Laboratorio Multimedia",
    available: true
  },
  {
    id: 6,
    group_id: 6,
    name: "Ciberseguridad para Jóvenes",
    format: "Virtual",
    date_id: 6,
    date: "2025-04-19",
    start_time: "15:00:00",
    end_time: "18:00:00",
    capacity: 25,
    current: 20,
    teached_by: "Dr. Miguel Herrera",
    description: "Aprende sobre seguridad informática, ethical hacking y protección de datos. Los participantes conocerán las principales amenazas digitales y cómo protegerse.",
    ages: "15-18",
    requisites: "Conocimientos intermedios de computación",
    objective: "Desarrollar conciencia sobre ciberseguridad y técnicas de protección",
    gender: "Mixto",
    location: "Plataforma Teams",
    available: true
  },
  {
    id: 7,
    group_id: 7,
    name: "Análisis de Datos con Python",
    format: "Híbrido",
    date_id: 7,
    date: "2025-04-26",
    start_time: "10:00:00",
    end_time: "14:00:00",
    capacity: 18,
    current: 14,
    teached_by: "Dra. Carmen Ruiz",
    description: "Descubre el poder de los datos usando Python, pandas y matplotlib. Los estudiantes analizarán datasets reales y crearán visualizaciones impactantes.",
    ages: "14-18",
    requisites: "Conocimientos básicos de Python",
    objective: "Aprender técnicas de análisis y visualización de datos",
    gender: "Mixto",
    location: "Campus Santa Fe / Virtual",
    available: true
  },
  {
    id: 8,
    group_id: 8,
    name: "Desarrollo de Apps Móviles",
    format: "Presencial",
    date_id: 8,
    date: "2025-05-03",
    start_time: "09:00:00",
    end_time: "17:00:00",
    capacity: 15,
    current: 6,
    teached_by: "Ing. Fernando Castro",
    description: "Crea aplicaciones móviles usando Flutter. Los participantes desarrollarán una app funcional que podrán instalar en sus dispositivos Android e iOS.",
    ages: "15-18",
    requisites: "Conocimientos básicos de programación",
    objective: "Desarrollar una aplicación móvil completa",
    gender: "Mixto",
    location: "Campus Sonora Norte, Laboratorio Móvil",
    available: true
  }
];

let nextId = 9;

async function getMultiple(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    
    return {
        data: mockWorkshops.slice(offset, offset + limit),
        meta: {
            page: parseInt(page),
            limit: limit,
            total: mockWorkshops.length,
            pages: Math.ceil(mockWorkshops.length / limit)
        }
    };
}

async function create(workshop) {
    const newWorkshop = {
        id: nextId++,
        ...workshop,
        current: 0,
        available: true,
        created_at: new Date().toISOString()
    };
    
    mockWorkshops.push(newWorkshop);
    return { message: 'Workshop created successfully', data: newWorkshop };
}

async function update(id, workshop) {
    const index = mockWorkshops.findIndex(w => w.id === parseInt(id));
    
    if (index === -1) {
        throw new Error('Workshop not found');
    }
    
    mockWorkshops[index] = { ...mockWorkshops[index], ...workshop };
    return { message: 'Workshop updated successfully', data: mockWorkshops[index] };
}

async function remove(id) {
    const index = mockWorkshops.findIndex(w => w.id === parseInt(id));
    
    if (index === -1) {
        throw new Error('Workshop not found');
    }
    
    const deletedWorkshop = mockWorkshops.splice(index, 1)[0];
    return { message: 'Workshop deleted successfully', data: deletedWorkshop };
}

async function getById(id) {
    const workshop = mockWorkshops.find(w => w.id === parseInt(id));
    
    if (!workshop) {
        throw new Error('Workshop not found');
    }
    
    return workshop;
}

module.exports = {
    getMultiple,
    create,
    update,
    remove,
    getById
};
