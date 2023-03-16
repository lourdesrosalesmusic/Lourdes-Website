

let page = document.querySelector('body').getAttribute('page')
             
const secText = document.querySelector('.secondary-text');

const transSuffix = "-translate-group";
const textRow = document.querySelectorAll("." + page + transSuffix);
//console.log(textRow);
console.log("page: ", page);

const langWrap = document.querySelector('.langWrap');
let langToggles  = document.querySelectorAll('.lang');


function addBioTranslate(groupsList, languageToTranslateTo) {
    groupsList.forEach( el => {
        // console.log(el);
        el.childNodes.forEach( childElement => {
            let eId = childElement.id;
            
            if(eId != null){
                childElement.textContent = data[languageToTranslateTo][page][eId];
            }
            
        })
        
    })
}


//uses labels
function addContactTranslate( groupsList, languageToTranslateTo) {
    groupsList.forEach(el => {
        el.querySelectorAll('.form-group').forEach( form_group => {
            let e = form_group.querySelector('label');
            console.log(e);
            if (e.id != null){
                console.log("lang: ", languageToTranslateTo);
                console.log("page: " , page);
                console.log("id: ", e.id);
                e.textContent = data[languageTotranslateTo][page][e.id];
            }
        }) 
    })
    
   
}


langToggles.forEach( el => {
    el.addEventListener('click', () => {
        langWrap.querySelector('.active').classList.remove('.active');
        el.classList.add('.active');

        const languageTotranslateTo = el.getAttribute('language');
        
        if (secText != null){
            secText.textContent = data[languageTotranslateTo][page].introText;
        }
        
        if (page == 'bio'){
            addBioTranslate(textRow, languageTotranslateTo );
        } else if (page == 'contact'){
            addContactTranslate(textRow, languageTotranslateTo);
        }
        
    })
})

var data = {
    "english" : {
        "bio" : {
            "introText": "english",
            "p1" : "Graduated in musical performance at the Royal Conservatoire of Music in Madrid. She began her musical studies under Remei Silvestre Vinaixa's tutelage. Throughout her career, she has received lessons from great teachers such as Alan Kovacs, Thuan Do Minh, Jaime Huertas, Laure Gaudron, Abel and Arnau Tomàs, Helena Poggio and Mikhail Zemtsov. After completing her Master's in Spanish Musical Performance in July 2021, she was awarded the United States Presidential Scholarship to pursue further master's studies at New Jersey City University. There she continued her musical studies on multi-style viola and violin, with Martha Mooke and Regina Carter.", 
            "p2" : "She currently resides in the United States and actively collaborates with multiple groups such as the Swing Machine Orchestra, the Film Symphony Orchestra, the Spanish Philharmonic Orchestra, and the Madrid Philharmonic Orchestra. In the world of modern music, she has collaborated with artists from the national and international scene such as Blas Cantó, El dúo Dinámico, Destripando la Historia, ELE, IL Divo, Isabel Pantoja, Joan Manuel Serrat, Paloma San Basilio, Pitingo, The American ELO and Yo Soy Raton.",
            "p3" : "",
            "p4" : "",
        },
        "multimedia" : {

        },

        "contact" : {
            "nameInput" : "Name",
            "emailInput" : "Email Address",
            "messageInput" : "Message"
        }

    }, 
    "spanish" : {
        "bio" : {
            "introText": "spanish",
            "p1" : "spanish paragraph", 
            "p2" : "",
            "p3" : "",
            "p4" : "",
        },
        "multimedia" : {

        },
        
        "contact" : {
            "nameInput" : "Nombre",
            "emailInput" : "Email",
            "messageInput" : "Mensaje"
        }
    }
}

