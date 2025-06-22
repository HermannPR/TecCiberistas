// Mock date service for development without MySQL connection

const mockDates = [
    { 
        id: 1, 
        date: '2024-03-15T10:00:00Z',
        workshop_id: 1,
        location: 'Aula 101',
        max_participants: 30
    },
    { 
        id: 2, 
        date: '2024-03-22T14:00:00Z',
        workshop_id: 2,
        location: 'Laboratorio de Informática',
        max_participants: 25
    },
    { 
        id: 3, 
        date: '2024-03-29T09:00:00Z',
        workshop_id: 1,
        location: 'Aula 102',
        max_participants: 30
    },
    { 
        id: 4, 
        date: '2024-04-05T16:00:00Z',
        workshop_id: 3,
        location: 'Sala de Conferencias',
        max_participants: 20
    }
];

let nextId = 5;

async function getMultiple(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    
    return {
        data: mockDates.slice(offset, offset + limit),
        meta: {
            page: parseInt(page),
            limit: limit,
            total: mockDates.length,
            pages: Math.ceil(mockDates.length / limit)
        }
    };
}

async function create(dateData) {
    const newDate = {
        id: nextId++,
        ...dateData,
        created_at: new Date().toISOString()
    };
    
    mockDates.push(newDate);
    return { message: 'Date created successfully', data: newDate };
}

async function getByWorkshopId(workshopId) {
    return mockDates.filter(date => date.workshop_id === parseInt(workshopId));
}

module.exports = {
    getMultiple,
    create,
    getByWorkshopId
};
