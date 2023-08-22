// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

const URL = "https://api.themoviedb.org/3/movie/";
const apiKey = "85b2d23c6bb4feabd04ca073bca26582";
const imgUrl = "https://image.tmdb.org/t/p/w400";

const parentDiv = document.querySelector('.postersDiv');
const discDiv = document.querySelector('.discDiv');
const mainDiv = document.querySelector('.main');
const searchBar = document.querySelector('.navBar > .ri-search-line');
const form = document.querySelector('.navBar > form');

const randomPage = Math.floor(Math.random() * (24) + 1);
console.log(randomPage);

discDiv.querySelector('.ri-close-line').addEventListener("click",function(){
  discDiv.classList.add('hide');
})

playingNow();
popularNow();
topRated();
upComing();

let renderingDiv = '#popularNow';

async function playingNow(){
  try {
    const { data } = await axios.get(
      `${URL}now_playing?api_key=${apiKey}&language=en-Us&page=${randomPage}`
    );
    console.log(data.results);
    renderingDiv = '#playingNow';
    if(data){
        data.results.forEach(ele => {
            createPoster(ele , renderingDiv)
        });
      }
  } catch (error) {
    console.log(error);
  }

};

async function popularNow(){
  try {
    const { data } = await axios.get(
      `${URL}popular?api_key=${apiKey}&language=en-Us&page=${randomPage}`
    );
    console.log(data.results);
    renderingDiv = '#popularNow';
    if(data){
        data.results.forEach(ele => {
            createPoster(ele , renderingDiv)
        });
      }
  } catch (error) {
    console.log(error);
  }

};

async function topRated(){
  try {
    const { data } = await axios.get(
      `${URL}top_rated?api_key=${apiKey}&language=en-Us&page=${randomPage}`
    );
    console.log(data.results);
    renderingDiv = '#topRated';
    if(data){
        data.results.forEach(ele => {
            createPoster(ele , renderingDiv)
        });
      }
  } catch (error) {
    console.log(error);
  }

};

async function upComing(){
  try {
    const { data } = await axios.get(
      `${URL}upcoming?api_key=${apiKey}&language=en-Us&page=${randomPage}`
    );
    console.log(data.results);
    renderingDiv = '#upComing';
    if(data){
        data.results.forEach(ele => {
            createPoster(ele , renderingDiv)
        });
      }
  } catch (error) {
    console.log(error);
  }

};

const createPoster = (data , div) => {

  const newDiv = document.createElement("div");

  newDiv.classList.add("poster");

  newDiv.innerHTML = `<div class="imgDiv">
                            <img src="${imgUrl}${data.poster_path ? data.poster_path : data.backdrop_path}" alt="Image not avialable">
                        </div>
                        <div class="nameRating">
                            <h4>${data.original_title}</h4>
                            <i>${data.popularity}</i>
                        </div>`;

  newDiv.addEventListener("click",function(){
    discDiv.querySelector('img').src = `${imgUrl}${data.poster_path}`;
    discDiv.querySelector('.title').innerText = data.original_title;
    discDiv.querySelector('p').innerText = data.overview;
    discDiv.classList.remove('hide');
  })

   mainDiv.querySelector(div).querySelector('.postersDiv').appendChild(newDiv)

};

searchBar.addEventListener("click" , function(){
  form.classList.toggle('hide')
})

form.querySelector('.ri-arrow-go-back-line').addEventListener("click" , function(){
  document.querySelector('#searchList').classList.add('hide');
  form.classList.add('hide')
})

form.addEventListener("submit",function(e){
  e.preventDefault();
  const {value} = e.target[0];
  searchOperation(value);
  e.target[0].value = "";
})

// 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=85b2d23c6bb4feabd04ca073bca26582'
// const URL = "https://api.themoviedb.org/3/movie/";
// const apiKey = "85b2d23c6bb4feabd04ca073bca26582";
// const imgUrl = "https://image.tmdb.org/t/p/w400";


const searchOperation = async (name) =>{
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`
    );
    console.log(data.results);
    renderingDiv = '#searchList';

    if(data.results.length > 0){
        document.querySelector('#searchList').classList.remove('hide')
        data.results.forEach(ele => {
            createPoster(ele , renderingDiv)
        });
      }
      else{
        alert(`No results found for ${name}`)
        document.querySelector('#searchList').classList.add('hide')
      }
  } catch (error) {
    console.log(error);
  }
}