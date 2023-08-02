async function callApi(){
  const number = document.getElementById('number').value;
  const image = document.getElementById('image')
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
  const res =await fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}/`)
  const resJson =await res.json();
  console.log(resJson.names[0].name);
  const name = document.getElementById('name');
  name.textContent = resJson.names[0].name;
}

const root = document.getElementById('root');
root.innerHTML = "<input id='number' type='number' placeholder='input pokemon number'/><button id='submit'>submit</button><br><div id='name'></div><img id='image'></img>"
document.getElementById('submit').addEventListener('click',callApi)