var save = document.getElementById('save');
var gameTitle = document.getElementById('gameTitle');
var searchBtn = document.getElementById('searchBtn');
var price = document.getElementById('price');
var platform = document.getElementById('platform');
var img1 =document.getElementById('game1');
var img2 =document.getElementById('game2');
var img3 =document.getElementById('game3');
var img4 =document.getElementById('game4');

var mainImg = document.getElementById('mainImg');

const handleGameSearch = () => {

    var searchname = document.getElementById('search').value;

    fetch("https://best-game-price-search.p.rapidapi.com/allshops/"+ searchname +"/?page=1&limit=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "best-game-price-search.p.rapidapi.com",
		"x-rapidapi-key": "93774ee794msh62787626de1afe0p107dbejsn77b95a3a493e"
	}
})
.then( response => response.json()
).then(response => {
console.log(response);

var game = response.results[0];
console.log(game);

gameTitle.innerHTML = game.title;
mainImg.src = game.img;
platform.innerHTML = game.platform;
price.innerHTML = game.price;

var game1 = response.results[1];
var game2 = response.results[2];
var game3 = response.results[3];
var game4 = response.results[4];

img1.src = game1.img
img2.src = game2.img
img3.src = game3.img
img4.src = game4.img

}).catch(err => {
	console.error(err);
});

};


searchBtn.addEventListener("click",handleGameSearch);