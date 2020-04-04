class Pagination {
    constructor(dataPromise) {
       this.next = null;
       this.previous = null;
       this.dataPromise = dataPromise;
    }
    setNext() {
    }
    getNext() {
        const root = this;
        return root.dataPromise.then(function(data){
            root.next = data.next;
            return fetch(data.next).then(function(response) {
                return response.json()
            })
        });
    }
}

$(function() {

// api urL
const API_URL = 'https://swapi.co/api'
const PEOPLE_RESOURCE = '/people/'
const STARSHIPS_RESSOURCE = '/starships/'

// DOM JQuery
const $firstColumnInfo = $('#first-column-info')
const $secondColumnInfo = $('#second-column-info')
const $thirdColumnInfo = $('#third-column-info')
const $wrapperFirstInfo = $('.wrapper-first-info')
const $wrapperSecondInfo = $('.wrapper-second-info')
const $wrapperThirdInfo = $('.wrapper-third-info')
const $previousPageButton = $('.previous-page')
const $nextPageButton = $('.next-page')
const $peopleButton = $('.people-count')

// loader button
const $loader = $('<button>').addClass('loading').text('Loading&#8230;')
$('.people-count').append($loader)
$('.starships-count').append($loader)
$('.planets-count').append($loader)
$('.next-page').append($loader)

// Helper method
// Reset container onclick
function emptyContainer($button) { 
    $button.attr('disabled', true);
    $button.removeAttr('disabled');
    $wrapperFirstInfo.empty();
    $wrapperSecondInfo.empty();
    $wrapperThirdInfo.empty();
};

// Swapi call promises
const peoplePromise = fetch(`${API_URL}${PEOPLE_RESOURCE}`).then(function (response) {
    return response.json()
    
})

const pagination = new Pagination(peoplePromise)

// // Display amount of Categories
peoplePromise.then(function (data) {
    $loader.remove()
    return $('.people-count').text(data.count)
})

// Button
$peopleButton.click(function() {
    emptyContainer($(this))
    peoplePromise.then(function(data) {
        data.results.forEach(function(result) {
            renderPeople(result)
        })
    })
});

// Render one people
function renderPeople(result) {
    $firstColumnInfo.text('Name')
    $secondColumnInfo.text('Height')
    $thirdColumnInfo.text('Gender')
    $wrapperFirstInfo.append($('<tr>').text(result.name))
    $wrapperSecondInfo.append($('<tr>').text(result.height))
    $wrapperThirdInfo.append($('<tr>').text(result.gender))
};

// Pagination

$nextPageButton.click(function() {
    emptyContainer($(this))
    pagination.getNext().then(function(data) {
        data.results.forEach(function(result) {
            return renderPeople(result)   
        })  
   })
    // get next via peoplePromis
    // fetch next via une met4hod getNext(next) (comme renderPeople)
});

// $previousPageButton.click(() => {
//   
// })


})

// const starshipsPromise = fetch(`${API_URL}${STARSHIPS_RESSOURCE}`).then((response) => {
//     return response.json()
// })
// const planetsAdress = fetch('https://swapi.co/api/planets/').then((response) => {
//     return response.json()
// })

// const starships = starshipsPromise.then((data) => {
//         $loader.remove()
//         $('.starships-count').text(data.count)
// })
// const planets = planetsAdress.then((data) => {
//         $loader.remove()
//          $('.planets-count').text(data.count)       
//         return new Promise((resolve, reject) => resolve(data.results))
// })

// const showStarships = (() => {
//     starshipsPromise.then(data => data.results.forEach((result) => {
//         $firstColumnInfo.text('Name')
//         $secondColumnInfo.text('Model')
//         $thirdColumnInfo.text('Passenger')
//         $wrapperFirstInfo.append($('<tr>').text(result.name))
//         $wrapperSecondInfo.append($('<tr>').text(result.model))
//         $wrapperThirdInfo.append($('<tr>').text(result.passengers))
//     }));
// })
// const showPlanets = this.button = $('.planets-count').click(() => {
//         resetButton()
//         console.log(planets)
//         planets.then(results => results.forEach((result) => {
//             $firstColumnInfo.text('Name')
//             $secondColumnInfo.text('Climate')
//             $thirdColumnInfo.text('Population')
//             $wrapperFirstInfo.append($('<tr>').text(result.name))
//             $wrapperSecondInfo.append($('<tr>').text(result.climate))
//             $wrapperThirdInfo.append($('<tr>').text(result.population))
//         }));
// })