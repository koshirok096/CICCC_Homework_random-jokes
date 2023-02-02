let mainbtn = document.getElementById('mainbtn');

mainbtn.addEventListener("click", () => {
    let type = document.getElementById("type");
    let setup = document.getElementById("setup")
    let punchline = document.getElementById("punchline");
    let myid = document.getElementById("myid");
    let refHead = document.getElementById("ref-headline");

    let replaceimgurl = document.getElementById("replaceimgurl");

    fetchURL("https://official-joke-api.appspot.com/random_joke").then((response) => {
        displayURL(response)
    })

    function displayURL(url) {
        setup.innerText = url.data.setup;
        punchline.innerText = url.data.punchline;
        refHead.innerText = "Reference of This Joke:";
        type.innerText = "Genre: " + url.data.type;
        myid.innerText = "ID: " + url.data.id;
        replaceimgurl.src = `https://source.unsplash.com/random?${punchline.innerText}`
        console.log(punchline.innerText);
    }

    async function fetchURL(username){
        try {
            return await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        } catch (error) {
            console.log(error);
        }
    }

});