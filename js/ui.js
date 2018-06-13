class UI {

    displayAlbum(e){
        e.preventDefault();
        // const getAlbum = document.getElementById('getAlbum');
        const albumDiv = document.getElementById('albumDiv');
        const albumSearch = document.getElementById('albumSearch');
        const artistSearch = document.getElementById('artistSearch');
        const message = document.getElementById('message');
        let album;
        api.getAlbumObject(artistSearch.value,albumSearch.value).then((alb)=>{
            console.log(alb);
            albumDiv.innerHTML = `
        <img src="${alb.images[1].url}" alt="">
        <h2>artist: ${alb.artists[0].name}</h2>
        <h2>name: ${alb.name}</h2>
        <h2>popularity: ${alb.popularity}</h2>`;
        }).catch((e)=>{
            //TBD: catch error when there is no token yet and user tries to get album
            //clear current album, display not found message, hide it after 2 sec
            console.log('not found!');
            albumDiv.innerHTML=``;
            message.innerText='Album not found, please refine your search.';
            setTimeout(()=>{
                message.innerText='';
            },2000);
        });

    }
}