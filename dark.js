const bg = document.getElementsByClassName('bg')[0]
const bg2 = document.getElementsByClassName('bg2')[0]
const bg3 = document.getElementsByClassName('bg3')[0]

const Theme = {
  setBackground(v) {
    bg.style.background = v
  },
  setBackgroundImage(v) {
    bg.style.backgroundImage = v
  },
  setOpacity(v) {
    bg.style.opacity = v
  },
  playAnimation() {
    bg2.style.display = 'block'
    bg3.style.display = 'block'
  },
  stopAnimation() {
    bg2.style.display = 'none'
    bg3.style.display = 'none'
  },
  Standard() {
    Theme.setOpacity(StandardTheme.opacity)
    Theme.playAnimation()
  },
  Dark() {
    Theme.setBackground(DarkTheme.background)
    Theme.setOpacity(DarkTheme.opacity)
    Theme.stopAnimation()
  }
}
const StandardTheme = {
  opacity: 0.5
}
const DarkTheme = {
  background: '#363946',
  opacity: 1,
  isActive: () => {
    return document.getElementById('dark').checked
  }
}
document.addEventListener("change", () => {
  if(DarkTheme.isActive()) {
    Theme.Dark()
  }
  else {
    Theme.Standard()
  }
})