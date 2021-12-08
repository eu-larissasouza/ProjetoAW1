const lyrics = document.querySelector('#lyrics')
const form = document.querySelector('#lyrics_form')

form.addEventListener('submit', el => {
  el.preventDefault()
  doSubmit()
})

function doSubmit() {
  lyrics.innerHTML =
    '<div class="spinner-grow" role="status"><span class="sr-only">Carregando</span></div>'

  axios
    .get(`https://api.lyrics.ovh/v1/${artist.value}/${song.value}`)
    .then(response => {
      lyrics.innerHTML = response.data.lyrics.replace(
        new RegExp('\n', 'g'),
        '</br>'
      )
    })
    .catch(err => {
      lyrics.innerHTML = `Oops! ${err}`
    })
}
