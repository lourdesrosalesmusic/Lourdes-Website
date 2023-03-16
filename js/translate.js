

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

    let pressRelease = document.querySelector("#pressRelease");
    pressRelease.textContent = data[languageToTranslateTo][page].pressRelease;
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
                e.textContent = data[languageToTranslateTo][page][e.id];
            }
        }) 
    })

    let sendButton = document.querySelector('#sendButton');

    sendButton.textContent = data[languageToTranslateTo][page].sendButton;
    
    let title = document.querySelector('.form-title');
    title.textContent = data[languageToTranslateTo][page].title;

    
   
}

function addIndexTranslate(groupsList, languageToTranslateTo){
    let exploreBTN = document.querySelector('#explore-btn');
    exploreBTN.textContent = data[languageToTranslateTo][page].exploreButton;
}

function navbarTranslate(languageToTranslateTo){
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(el => {
        if (el.id != null){
            let newData =  data[languageToTranslateTo]['navbar'][el.id];
            
            if ( newData != null){
                el.textContent = newData;
            }
        }

        
    })
}


langToggles.forEach( el => {
    el.addEventListener('click', () => {
        langWrap.querySelector('.active').classList.remove('.active');
        el.classList.add('.active');

        const languageToTranslateTo = el.getAttribute('language');
        
        navbarTranslate(languageToTranslateTo);

        if (secText != null){
            secText.textContent = data[languageToTranslateTo][page].introText;
        }
        
        if (page == 'bio'){
            addBioTranslate(textRow, languageToTranslateTo );
        } else if (page == 'contact'){
            addContactTranslate(textRow, languageToTranslateTo);
        } else if ( page == "index"){
            addIndexTranslate(null, languageToTranslateTo)
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
            "pressRelease" : "Press Release"
        },
        "multimedia" : {

        },

        "contact" : {
            "title" : "Contact Me",
            "nameInput" : "Name",
            "emailInput" : "Email Address",
            "messageInput" : "Message",
            "sendButton" : "Send"
        },
        "index" : {
            "exploreButton" : "Explore"
        },
        "navbar" : {
            "contact" : "Contact"
        }

    }, 
    "spanish" : {
        "bio" : {
            "introText": "spanish",
            "p1" : "spanish paragraph", 
            "p2" : "",
            "p3" : "",
            "p4" : "",
            "pressRelease" : "Communicado de Prensa"
        },
        "multimedia" : {

        },
        
        "contact" : {
            "title" : "Contactame",
            "nameInput" : "Nombre",
            "emailInput" : "Email",
            "messageInput" : "Mensaje",
            "sendButton" : "Enviar"
        },
        "index" : {
            "exploreButton" : "Explorar"
        },
        "navbar" : {
            "contact" : "Contactar"
        }


    }
}

