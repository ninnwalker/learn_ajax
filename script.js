var pageCounter = 1;
btn = document.getElementById("btn-load")
containerData = document.getElementById("show-data");
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    ourRequest.onload = function() {
        var OurData = JSON.parse(ourRequest.responseText); // get data return to json format
        // console.log(OurData[1].name);
        renderHTML(OurData);
        pageCounter++;
        if(pageCounter > 3){
            btn.classList.add("hide-me");
        }
    };

    ourRequest.send();
});

function renderHTML(data){
    var htmlString = "";
    
    for(i=0; i < data.length; i++){
        htmlString += "<p>"+ data[i].name +"is a "+ data[i].species + ".</p>";
    };

    containerData.insertAdjacentHTML('beforeend', htmlString);
}