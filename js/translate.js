

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
    
    document.querySelectorAll(".text").forEach(cEL => {
        id = cEL.id
        if(id != null){
            cEL.textContent = data[languageToTranslateTo][page][id];
        }
    }) 
   
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
            "p1" : "English Version: Quia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque.  Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa.  Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus incidunt Quia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque. Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa. Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus inciduntQuia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque. Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa. Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus incidunt"
        
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
            "p1" : "Graduada en Interpretación Musical por el Real Conservatorio Superior de Música de Madrid. Inició sus estudios de música bajo la tutela de Remei Silvestre Vinaixa. A lo largo de su carrera ha recibido clases de grandes maestros como Alan Kovacs, Thuan Do Minh, Jaime Huertas, Laure Gaudron, Abel y Arnau Tomàs, Helena Poggio y Mikhail Zemtsov.", 
            "p2" : "Tras finalizar el Máster en Enseñanzas Artísticas en Interpretación e Investigación Performativa de Música Española, en julio de 2021, es premiada con la beca Presidencial de Estados Unidos para comenzar otros estudios de máster en la Universidad de la ciudad de New Jersey. Allí proseguirá con sus estudios de Viola y Violín multiestilo con Martha Mooke y Regina Carter.",
            "p3" : "",
            "p4" : "",
            "pressRelease" : "Communicado de Prensa"
        },
        "multimedia" : {

        },
        
        "contact" : {
            "title" : "Contáctame",
            "p1" : "Version en espanol: Quia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque.  Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa.  Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus incidunt Quia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque. Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa. Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus inciduntQuia nihil sit facere aut in. Voluptatem et cumque maxime quos cumque. Voluptas maxime voluptas aut laborum ratione facere sunt. Id corporis dolorem ut culpa. Neque molestias modi et officia odio. Necessitatibus et omnis ad eligendi non minus incidunt"
        },
        "index" : {
            "exploreButton" : "Explorar"
        },
        "navbar" : {
            "contact" : "Contactar"
        }


    }
}

