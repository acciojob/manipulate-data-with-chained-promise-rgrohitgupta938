//your JS code here. If required.
function processData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

processData()
  .then((data) => {
    const oddNumbers = data.filter(num => num % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(oddNumbers);
      }, 1000);
    });
  })
  .then((oddNumbers) => {
    document.getElementById("output").textContent = oddNumbers.join(", ");
    return oddNumbers;
  })
  .then((oddNumbers) => {
    const evenNumbers = [1,2,3,4].filter(num => num %2 === 0 ).map(num => num*2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(evenNumbers);
      }, 2000);
    });
  })
  .then((evenNumbers) => {
    document.getElementById("output").textContent = evenNumbers.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
