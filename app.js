const picker=document.querySelector("#playlist-select");
const playlistLink=document.querySelector("#playlist-link");
picker.addEventListener("change",()=>{
  const query=encodeURIComponent(picker.value);
  playlistLink.href=`https://open.spotify.com/search/${query}`;
});
