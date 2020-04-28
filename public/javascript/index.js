
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    // clone the character-info section and then remove it from the DOM
    let templateNode = document.getElementsByClassName('character-info')[0].cloneNode(true)
    document.getElementsByClassName('character-info')[0].remove()

    axios.get('http://localhost:8000/characters').then((response) => {
      response.data.forEach((character) => {

        let newNode = templateNode.cloneNode(true)
        newNode.getElementsByClassName('name')[0].innerText = character.name
        newNode.getElementsByClassName('occupation')[0].innerText = character.occupation
        newNode.getElementsByClassName('cartoon')[0].innerText = character.cartoon
        newNode.getElementsByClassName('weapon')[0].innerText = character.weapon
        document.getElementsByClassName('characters-container')[0].append(newNode)

      })
    })


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let ID = 54

    axios.get('http://localhost:5000/characters/' + ID)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
