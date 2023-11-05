let array = [];

// Random Number Generator
function random(pool) {
  let num = Math.floor(Math.random() * pool) + 1;
  return num;
}

// Factory Function
function item(name, image) {
  return { name, image };
}

// Populate Array
async function populateArray() {
  for (let index = 0; index < 10; index++) {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${random(1017)}`,
      {
        mode: "cors",
      },
    );
    let response_json = await response.json();
    array[index] = item(
      response_json.name,
      response_json.sprites.front_default,
    );
    console.log(array[index]);
  }
  console.log(array);
}
populateArray();
