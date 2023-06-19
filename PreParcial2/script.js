document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('distanceForm');
  const dimensionSelect = document.getElementById('dimension');
  const pointAXInput = document.getElementById('pointAX');
  const pointAYInput = document.getElementById('pointAY');
  const pointAZInput = document.getElementById('pointAZ');
  const pointBXInput = document.getElementById('pointBX');
  const pointBYInput = document.getElementById('pointBY');
  const pointBZInput = document.getElementById('pointBZ');
  const pointAError = document.getElementById('pointAError');
  const pointBError = document.getElementById('pointBError');
  const resultContainer = document.getElementById('resultContainer');
  const result = document.getElementById('result');
  const pointAZSeparator = document.getElementById('pointAZSeparator');
  const pointBZSeparator = document.getElementById('pointBZSeparator');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateDistance();
  });

  dimensionSelect.addEventListener('change', function() {
    toggleDimensionInputs();
  });

  pointAXInput.addEventListener('focusout', function() {
    validateInput(pointAXInput, pointAError);
  });

  pointAYInput.addEventListener('focusout', function() {
    validateInput(pointAYInput, pointAError);
  });

  pointAZInput.addEventListener('focusout', function() {
    validateInput(pointAZInput, pointAError);
  });

  pointBXInput.addEventListener('focusout', function() {
    validateInput(pointBXInput, pointBError);
  });

  pointBYInput.addEventListener('focusout', function() {
    validateInput(pointBYInput, pointBError);
  });

  pointBZInput.addEventListener('focusout', function() {
    validateInput(pointBZInput, pointBError);
  });

  function calculateDistance() {
    const dimension = parseInt(dimensionSelect.value);
    const pointA = parseCoordinates(pointAXInput.value, pointAYInput.value, pointAZInput.value, dimension);
    const pointB = parseCoordinates(pointBXInput.value, pointBYInput.value, pointBZInput.value, dimension);

    if (pointA && pointB) {
      const distance = getDistance(pointA, pointB);
      displayResult(distance);
    }
  }

  function parseCoordinates(x, y, z, dimension) {
    const coordinates = [];

    coordinates.push(parseFloat(x), parseFloat(y));

    if (dimension === 3) {
      coordinates.push(parseFloat(z));
    }

    for (let i = 0; i < coordinates.length; i++) {
      const coordinate = coordinates[i];

      if (isNaN(coordinate) || coordinate <= 0) {
        displayError(getInput(i, dimension), getErrorContainer(i), 'Valor de Coordenadas inválido.');
        return null;
      }
    }

    return coordinates;
  }

  function getDistance(pointA, pointB) {
    let sumOfSquares = 0;

    for (let i = 0; i < pointA.length; i++) {
      const diff = pointA[i] - pointB[i];
      sumOfSquares += diff * diff;
    }

    return Math.sqrt(sumOfSquares);
  }

  function displayResult(distance) {
    result.textContent = distance.toFixed(6);
    resultContainer.style.display = 'block';
  }

  function displayError(input, errorContainer, errorMessage) {
    input.classList.add('is-invalid');
    errorContainer.textContent = errorMessage;
    errorContainer.style.display = 'block';
  }

  function clearError(input, errorContainer) {
    input.classList.remove('is-invalid');
    errorContainer.textContent = '';
    errorContainer.style.display = 'none';
  }

  function toggleDimensionInputs() {
    const dimension = parseInt(dimensionSelect.value);

    if (dimension === 2) {
      pointAZInput.style.display = 'none';
      pointBZInput.style.display = 'none';
      pointAZSeparator.textContent = '';
      pointBZSeparator.textContent = '';
    } else if (dimension === 3) {
      pointAZInput.style.display = 'inline-block';
      pointBZInput.style.display = 'inline-block';
      pointAZSeparator.textContent = ',';
      pointBZSeparator.textContent = ',';
    }

    resetInputs();
  }

  function resetInputs() {
    pointAXInput.value = '';
    pointAYInput.value = '';
    pointAZInput.value = '';
    pointBXInput.value = '';
    pointBYInput.value = '';
    pointBZInput.value = '';
    resultContainer.style.display = 'none';
    clearError(pointAXInput, pointAError);
    clearError(pointAYInput, pointAError);
    clearError(pointAZInput, pointAError);
    clearError(pointBXInput, pointBError);
    clearError(pointBYInput, pointBError);
    clearError(pointBZInput, pointBError);
  }

  function validateInput(input, errorContainer) {
    const coordinate = parseFloat(input.value);

    if (isNaN(coordinate) || coordinate <= 0) {
      displayError(input, errorContainer, 'Valor de Coordenadas inválido. Debe ser mayor que 0.');
    } else {
      clearError(input, errorContainer);
    }
  }

  function getInput(index, dimension) {
    if (dimension === 2) {
      if (index === 0) {
        return pointAXInput;
      } else if (index === 1) {
        return pointAYInput;
      }
    } else if (dimension === 3) {
      if (index === 0) {
        return pointAXInput;
      } else if (index === 1) {
        return pointAYInput;
      } else if (index === 2) {
        return pointAZInput;
      }
    }
  }

  function getErrorContainer(index) {
    return index < 2 ? pointAError : pointBError;
  }

  toggleDimensionInputs();
});
