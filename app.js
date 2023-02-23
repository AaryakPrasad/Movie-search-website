let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");


let getMovie = ()=>{
    let movieName = movieNameRef.value;
    let m_url = `http://www.omdbapi.com/?t=${movieName}&apikey=a5107ef8`;
    if (movieName.length <= 0){
        result.innerHTML = '<h3 class="msg">Please enter a movie/series name!</h3>'
    }
    else{
        axios.get(m_url).then((res) =>{
            let data = res.data;
            if(data.Response =="True"){

                result.innerHTML = `
                <div class ='info'>
                    <img src=${data.Poster} class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img class="rating" src="assets/star-svgr.svg">
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                        </div>
                    </div>
                
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                `;
            }
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch(()=>{
                result.innerHTML = `<h3 class="msg>Sorry!An unexpected error occured.</h3>`;

            })
    }
};
searchBtn.addEventListener('click',getMovie);
window.addEventListener('load',getMovie);