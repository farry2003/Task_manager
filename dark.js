const Theme = {
  isDark: () => {
    return document.getElementById('dark').checked
  }
}
document.addEventListener("change", () => {
  if(Theme.isDark()) {
    document.getElementsByClassName('bg')[0].style.background = "#363946"
    document.getElementsByClassName('bg')[0].style.opacity = "1"
    document.getElementsByClassName('bg2')[0].style.display = "none"
    document.getElementsByClassName('bg3')[0].style.display = "none"
  }
  else {
    document.getElementsByClassName('bg')[0].style.backgroundImage = 'linear-gradient(-60deg, #153b3d 50%, #3c6e71 50%)'
    document.getElementsByClassName('bg')[0].style.opacity = "0.5"
    document.getElementsByClassName('bg2')[0].style.display = "block"
    document.getElementsByClassName('bg3')[0].style.display = "block"
  }
})