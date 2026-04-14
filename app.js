
let weathercart = document.getElementById("weather-cart")


fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(function(data){
    return data.json();
})
.then (function(data){
    for(let i = 0; i < data.length; i++) {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML += `
        <h1>title: ${data[i].title}</h1>
        <h2>Id: ${data[i].id}</h2>
        <h2>body: ${data[i].body}</h2>
        <h2>userId: ${data[i].userId}</h2> `

        weathercart.appendChild(card);
        }
    })
    .catch (function(error) {
        console.log(error);

    })


let pic = document.getElementById("pic-div");

fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(function (photos) {
        return photos.json();
    })
    .then(function (photos) {
        for (let i = 0; i < photos.length; i++) {
            let cardbox = document.createElement("div");
            cardbox.className = "cardforPic"
            cardbox.innerHTML += `
        <p>AlbumId: ${photos[i].albumId}</p>
        <p>Image: ${photos[i].url}<br>
        Title: ${photos[i].title}<br>
        ThumbnailUrl: ${photos[i].thumbnailUrl}<br>
        Id: ${photos[i].id}</p>`
            pic.appendChild(cardbox);
        }
    })
    .catch(function (error) {
        console.log(error);

    })
