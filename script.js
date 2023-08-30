const root = document.getElementById('root');
root.innerHTML = `
<input id="pokemonNo" type="number"></input>
<br />
<button id="pokemonBtn">GET POKEMON!</button>
<div id="nameJP"></div>
<div id="nameEN"></div>
<img id="pokemonImg" src=""></img>`;
const pokemonImg = document.getElementById('pokemonImg');

async function getPokemon(){
    const No = document.getElementById('pokemonNo').value;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${No}`);
    const resJP = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${No}`);
    const resJson = await res.json();
    const resJPJson = await resJP.json();
    document.getElementById("nameJP").textContent = await resJPJson.names[0].name;
    document.getElementById("nameEN").textContent = await resJson.forms[0].name;
    console.log(resJPJson.names[0])
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${No}.png`;
}

document.getElementById("pokemonBtn").onclick = () => {
    getPokemon();
}