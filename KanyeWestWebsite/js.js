let counterForPink = 0;
    const text = "Kanye said nuh uh!";

    function translateText(event){
        let text = event.target.innerHTML;

        let url = "https://translate.google.com/#en/sv/" + encodeURI(text);
        window.open(url, '_blank');
        
    } 
      
      function goToSource(quote) {
        console.log(quote.innerHTML)
        const citeUrl = quote.getAttribute('cite');
        if (citeUrl && (citeUrl.startsWith('http://') || citeUrl.startsWith('https://'))) {
        window.open(citeUrl, '_blank');
        }        else {
        console.error('Invalid or missing URL:', citeUrl);
        }
        }
        
        
        
        
        document.querySelectorAll(".english").forEach((element) => {
	        element.addEventListener("click", translateText);
        });
        function changings(element) {
            element.innerHTML = "Kanye said nuh uh!";
            element.classList.add("english");
            counterForPink++;
            if(counterForPink == 2){
                document.querySelectorAll(".english").forEach((element) => {
            	element.style.color = 'pink';
            	element.style.fontWeight = 'bold';
            });
            }
        }
        document.querySelectorAll("h3").forEach((element) => {
	    element.addEventListener("click", (event) => {
		    changings(event.target);
	        });
        });
        document.querySelector("#quotes").addEventListener("mouseout", (event) => {
	        document.querySelector("body").style.backgroundColor = '#b3e6e2';
        });
        document.querySelector("#quotes").addEventListener("mouseover", (event) => {
	        document.querySelector("body").style.backgroundColor = 'white';
        });
