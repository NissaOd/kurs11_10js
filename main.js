const player1 = {
    name: 'Scorpion',
    hp: 100,
    img:  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bat', 'sabre', 'gun', 'bazooka', 'carbine', 'mortar'],
    attack: function () {
        console.log(player1.name + '- Fight');
        }
}
player1.attack();

const player2 = {
    name: 'Sonya',
    hp: 100,
    img:  'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['bat', 'sabre', 'gun', 'bazooka', 'carbine', 'mortar'],
    attack: function () {
            console.log(player2.name + '- Fight'); 
            }
 }
player2.attack();

function createPlayer(playerClass, player) {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    
    const $character = document.createElement('div');
    $character.classList.add('character');
    
    const $life = document.createElement('div');
    $life.classList.add("life");
    $life.style.width = '10%';
    
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player1.name;
    
    const $img = document.createElement("img");
    $img.src = player1.img;
    
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    
    const $arenas = document.querySelector ('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
