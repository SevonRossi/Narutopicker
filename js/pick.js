document.querySelector('#naruto').addEventListener('click',naruto)
document.querySelector('#sauske').addEventListener('click',sauske)
document.querySelector('#kakashi').addEventListener('click',kakashi)
document.querySelector('#minato').addEventListener('click',minato)
document.querySelector('#madara').addEventListener('click',madara)
document.querySelector('#itatchi').addEventListener('click',itatchi)
const refreshBtn = document.getElementById("btnRefresh");

function naruto (){
  document.querySelector('body').style.backgroundImage = "url('https://wallpapers.com/images/hd/kurama-and-biju-mode-naruto-laptop-6ho9oqkd0ho1ubah.jpg')"
  document.querySelector('#sauske').style.display = 'none';
document.querySelector('#kakashi').style.display ='none';
document.querySelector('#minato').style.display ='none';
document.querySelector('#madara').style.display ='none';
document.querySelector('#itatchi').style.display ='none';

}


function sauske (){
    document.querySelector('#naruto').style.display = 'none';
    document.querySelector('body').style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/783/886/454/anime-naruto-shippuuden-uchiha-sasuke-wallpaper-preview.jpg')"
    document.querySelector('body').style.backgroundSize = '1600px 800px';
  document.querySelector('#kakashi').style.display ='none';
  document.querySelector('#minato').style.display ='none';
  document.querySelector('#madara').style.display ='none';
  document.querySelector('#itatchi').style.display ='none';
  
  }

  
function kakashi (){
    document.querySelector('#naruto').style.display = 'none';
    document.querySelector('#sauske').style.display = 'none';
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/v2/resize:fit:906/1*thkTJMR4mBMWI_b197iUuQ.png')"
  document.querySelector('body').style.backgroundSize = '1600px 800px';
  document.querySelector('#minato').style.display ='none';
  document.querySelector('#madara').style.display ='none';
  document.querySelector('#itatchi').style.display ='none';
  
  }

  
function minato (){
    document.querySelector('#naruto').style.display = 'none';
    document.querySelector('#sauske').style.display = 'none';
  document.querySelector('#kakashi').style.display ='none';
  document.querySelector('body').style.backgroundImage = "url('https://cdn.wallpapersafari.com/64/33/XS6dyZ.jpg')"
  document.querySelector('body').style.backgroundSize = '1600px 800px';
  document.querySelector('#madara').style.display ='none';
  document.querySelector('#itatchi').style.display ='none';
  
  }
  
function madara (){
    document.querySelector('#naruto').style.display = 'none';
    document.querySelector('#sauske').style.display = 'none';
  document.querySelector('#kakashi').style.display ='none';
  document.querySelector('#minato').style.display ='none';
  document.querySelector('body').style.backgroundImage = "url('https://images4.alphacoders.com/135/1357584.png')"
  document.querySelector('body').style.backgroundSize = '1600px 800px';
  document.querySelector('#itatchi').style.display ='none';

}

  
function itatchi (){
    document.querySelector('#naruto').style.display = 'none';
    document.querySelector('#sauske').style.display = 'none';
  document.querySelector('#kakashi').style.display ='none';
  document.querySelector('#minato').style.display ='none';
  document.querySelector('body').style.backgroundImage = "url('https://wallpapers-clan.com/wp-content/uploads/2024/07/itachi-uchiha-sharingan-dark-desktop-wallpaper-preview.jpg')"
  document.querySelector('body').style.backgroundSize = '1600px 800px';
  document.querySelector('#itatchi').style.display ='none';
  
  }

  function handleClick() {
    window.location.reload();
  }
  
  refreshBtn.addEventListener("click", handleClick);