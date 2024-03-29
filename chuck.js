// This function loads pokemon data from the Pokemon API
const chuckNouris = () => {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chucknorris) {
        
  
        // Build a block of HTML
        const chuckHtml = `
          <p><strong>${chucknorris.value}</strong></p>
          <img src="${chucknorris.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = chuckHtml;
      });
  }
  
  chuckNouris();