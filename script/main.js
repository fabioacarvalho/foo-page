// CONECT WITH API CHATGPT

const btn_ask = document.querySelector("#btn_ask").addEventListener("click", function(){
    
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"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"}`
    };

    var ask_get = document.querySelector("#aks_get").value
    const responseContainer = document.querySelector('#response-container');

    console.log(ask_get)
    const ask = JSON.stringify({
        prompt: ask_get,
        max_tokens: 1500,
        n: 1,
        stop: "\n",
        temperature: 0.1
    });

    const options = {
        method: 'POST',
        headers,
        body: ask
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        if (data.choices && data.choices.length > 0) {
            responseContainer.innerHTML = data.choices[0].text;
            console.log(data.choices[0].text)
        } else {
            responseContainer.innerHTML = "Não foi possível obter uma resposta.";
        }
    })
    .catch(error => console.error(error));
            

})



