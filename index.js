// Accedemos al elemento HTML donde queremos mostrar la información
const container = document.querySelector('.container');

// Creamos un arreglo de objetos con información sobre las motocicletas
const motorcycles = [  {    make: 'Harley Davidson',    model: 'Sportster',    year: 2022,    engineSize: '1200cc',    price: 15000  },  {    make: 'Honda',    model: 'CBR',    year: 2021,    engineSize: '1000cc',    price: 11000  },  {    make: 'Yamaha',    model: 'R1',    year: 2021,    engineSize: '1000cc',    price: 12000  }];

// Función para generar el HTML con la información de las motocicletas
function displayMotorcycles() {
  let output = '';

  motorcycles.forEach(motorcycle => {
    output += `
      <div class="motorcycle">
        <h2>${motorcycle.make}</h2>
        <p>Model: ${motorcycle.model}</p>
        <p>Year: ${motorcycle.year}</p>
        <p>Engine Size: ${motorcycle.engineSize}</p>
        <p>Price: $${motorcycle.price}</p>
      </div>
    `;
  });

  container.innerHTML = output;
}

// Llamamos a la función para que se muestre la información en la página
displayMotorcycles();
