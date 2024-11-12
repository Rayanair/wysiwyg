export class MyWysiwyg {

    constructor(text, option) {
        this.text = text;
        this.option = option;
        console.log(this.text);
        console.log(this.option.buttons);

        

        document.addEventListener("keypress", function (e) {
            console.log(e.key);
            if (e.key == "Enter") {
              console.log(e.target.value);
              let value = e.target.value;
              let paragraphs = value.split("\n").map((text) => {
                return `<p>${text}</p>`;
              });
              e.target.innerHTML = paragraphs.join("");
            }
        })
 
        if(this.option.buttons[0] == "bold"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("G");    
            btn.setAttribute("class", "elbold")  
            btn.appendChild(t); 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("bold")
            })
        }

        if(this.option.buttons[1] == "italic"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("I");  
            btn.setAttribute("class", "elitalic")    
            btn.appendChild(t); 
            btn.class = "elitalic" 
            document.body.appendChild(btn);  
            btn.addEventListener("click", () => {
                this.text.classList.toggle("italic")
            })
        }

        if(this.option.buttons[2] == "color"){
            const btn = document.createElement("input");
            btn.type = "color"
            btn.id = "elcolor"
            document.body.appendChild(btn);
            console.log(btn)
            const p = this.text
            btn.addEventListener('input', function() {
                const couleur = document.querySelector("#elcolor").value
                p.style.color = couleur
            })
        }

        if(this.option.buttons[3] == "barre"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("U");    
            btn.setAttribute("class", "elbarre")     
            btn.appendChild(t); 
            btn.class = "elbarre" 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("barre");
            })
        }

        if(this.option.buttons[4] == "taille"){
            var btn = document.createElement("INPUT");
            var t = document.createTextNode("Taille"); 
            btn.type = "number"      
            btn.id = "eltaille"
            btn.appendChild(t); 
            document.body.appendChild(btn);
            const p = this.text
            btn.addEventListener("input",() =>{
                const taille = document.querySelector("#eltaille").value
                p.style.fontSize = taille+"px"
            })
        }

        if(this.option.buttons[5] == "lien"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("Lien"); 
            btn.setAttribute("class", "ellien")        
            btn.appendChild(t); 
            document.body.appendChild(btn);
        }
        if(this.option.buttons[6] == "gauche"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("gauche")
            btn.setAttribute("class", "elgauche");       
            btn.appendChild(t); 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("gauche");
            })
        }
        if(this.option.buttons[7] == "droite"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("droite"); 
            btn.setAttribute("class", "eldroite")        
            btn.appendChild(t); 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("droite");
            })
        }
        if(this.option.buttons[8] == "centre"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("centre");
            btn.setAttribute("class", "elcentre")         
            btn.appendChild(t); 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("centre");
            })
        }

        if(this.option.buttons[9] == "justifie"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("justifie");  
            btn.setAttribute("class", "eljustifie")       
            btn.appendChild(t); 
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                this.text.classList.toggle("justifie");
            })
        }
        if(this.option.buttons[10] == "augmente"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("augmente"); 
            btn.setAttribute("class", "elaugmente")        
            btn.appendChild(t); 
            document.body.appendChild(btn);
        }
        if(this.option.buttons[11] == "diminue"){
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("diminue");  
            btn.setAttribute("class", "eldiminue")       
            btn.appendChild(t); 
            document.body.appendChild(btn);
        }
        

      }
}
