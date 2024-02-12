const fs = require('fs');
const path = require('path');

// Assuming your JSON structure is stored in Data.json
const { loctype } = require('src/data/JSON/Data.json'); // Corrected path and destructured to directly access 'loctype'

const searchIndex = [];

try {
// Helper function to process each employee in a department
const processEmployees = (employees, baseUrl) => {
    employees.forEach(employee => {
        const url = `${baseUrl}#emp-${employee.id}-${employee.firstName}-${employee.lastName}`.toLowerCase().replace(/\s+/g, '-');
        searchIndex.push({
            name: `${employee.firstName} ${employee.lastName}`,
            url
        });
    });
};

// Process corporate locations
loctype.corporate.locations.forEach(location => {
    location.departments.forEach(department => {
        processEmployees(department.employees, '/corporate');
    });
});

// Process plant locations
loctype.plant.locations.forEach(location => {
    location.departments.forEach(department => {
        processEmployees(department.employees, '/plant');
    });
});

// Write the search index to a JSON file
fs.writeFileSync(path.join(__dirname, 'public', 'search-index.json'), JSON.stringify(searchIndex, null, 2));
} catch (error) {
    console.error('Failed to generate search index:', error);
  }