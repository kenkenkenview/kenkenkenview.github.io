const root = document.getElementById('root');
root.innerHTML = `
<div class="navbar bg-primary text-primary-content">
  <a class="btn btn-ghost normal-case text-2xl">Welcome to kenkenkenview's homepage</a>
</div>
<input id="pokemonNo" placeholder = "Input Pokemon"></input>
<br />
<button id="pokemonBtn">Get Pokemon!</button>
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
    pokemonImg.src = await resJson.sprites.other["official-artwork"].front_default;
}

document.getElementById("pokemonBtn").onclick = () => {
    getPokemon();
}