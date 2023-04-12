const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // 3. Fix the bug
    // value: prompt('Degree celsius: '),
    value: Number(prompt('Degree celsius: ')),
  };

  // 2. Find the bug

  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1. Identify the bug
console.log(measureKelvin());
