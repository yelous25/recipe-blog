import './styles/index.css'
import 'https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js'

document.querySelectorAll('.main .instruction-container ol li').forEach((li, key) => {
  li.querySelector('.olCounter').innerHTML = `<span>${key + 1}</span>`
})
