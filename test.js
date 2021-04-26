const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.jpeg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://picsum.photos/v2/list', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
    data.forEach((picture) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = `Artist: ${picture.author}`

      var img = document.createElement('img')
      img.src = picture.download_url

      const button = document.createElement('button');
      button.innerText= '❤️';

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(img)
      card.append(button)
    })

}

request.send()