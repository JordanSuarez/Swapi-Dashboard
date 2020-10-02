const app = {
    API_URL: 'https://swapi.dev/api/',
    PEOPLE_RESOURCE: 'https://swapi.dev/api/people/',
    STARSHIPS_RESOURCE: 'https://swapi.dev/api/starships/',
    PLANETS_RESOURCE: 'https://swapi.dev/api/planets/',
    $firstColumnInfo: $('#first-column-info'),
    $secondColumnInfo: $('#second-column-info'),
    $thirdColumnInfo: $('#third-column-info'),
    $wrapperFirstInfo: $('.wrapper-first-info'),
    $wrapperSecondInfo: $('.wrapper-second-info'),
    $wrapperThirdInfo: $('.wrapper-third-info'),
    $previousPageButton: $('.previous-page'),
    $nextPageButton: $('.next-page'),
    $peoplesButton: $('.peoples-count'),
    $starshipsButton: $('.starships-count'),
    $planetsButton: $('.planets-count'),
    $loader: $('<button>').addClass('loading').text('Loading&#8230;'),
    currentRenderMethod: null,

    init: () => {
        console.log("init")
        app.handleLoader()
        app.handleDisplayData()
    },
    handleLoader: () => {
        app.$peoplesButton.append(app.$loader)
        app.$starshipsButton.append(app.$loader)
        app.$planetsButton.append(app.$loader)
        app.$nextPageButton.append(app.$loader)
        app.$previousPageButton.append(app.$loader)
    },
    handleDisplayData: () => {
        const peoplesPromise = app.callPromiseFromAPI(app.PEOPLE_RESOURCE)
        const starshipsPromise = app.callPromiseFromAPI(app.STARSHIPS_RESOURCE)
        const planetsPromise = app.callPromiseFromAPI(app.PLANETS_RESOURCE)

        // display count on each buttons
        app.handleDisplayCount(peoplesPromise,'.peoples-count')
        app.handleDisplayCount(starshipsPromise, '.starships-count')
        app.handleDisplayCount(planetsPromise, '.planets-count')

        // event listener
        app.$nextPageButton.on('click', app.nextTablePage)
        app.$previousPageButton.on('click', app.previousTablePage)
        app.$peoplesButton.on('click', () => {app.handleDisplayNames(peoplesPromise, app.handleRenderPeoples) })
        app.$starshipsButton.on('click', () => {app.handleDisplayNames(starshipsPromise, app.handleRenderStarships)})
        app.$planetsButton.on('click', () => {app.handleDisplayNames(planetsPromise, app.handleRenderPlanets)})
    },
    nextTablePage: () => {
        const promise = app.callPromiseFromAPI(app.PEOPLE_RESOURCE)
        promise.then((data) => {
            if(data.next !== null) {
                app.PEOPLE_RESOURCE = data.next
                const newPromise = app.callPromiseFromAPI(data.next)
                app.handleDisplayNames(newPromise, app.handleRenderPeoples)
            }
        })
    },
    previousTablePage: () => {
        const promise = app.callPromiseFromAPI(app.PEOPLE_RESOURCE)
        promise.then((data) => {
            if(data.previous !== null) {
                app.PEOPLE_RESOURCE = data.previous
                const newPromise = app.callPromiseFromAPI(data.previous)
                app.handleDisplayNames(newPromise, app.handleRenderPeoples)
            }
        })
    },
    callPromiseFromAPI: (resourcePath) => {
        return fetch(`${resourcePath}`).then((response) => {
            return response.json()
        })
    },
    handleDisplayCount: (promise, className) => {
        promise.then((data) => {
            console.log(data);
            app.$loader.remove()
            return $(className).text(data.count)
        })
    },
    handleDisplayNames: (promise, resourceMethod) => {
        app.handleEmptyDataTableContent()
        promise.then((data) => {
            app.$loader.remove()
            data.results.forEach((result) => {
                resourceMethod(result)
            })
        })
    },
    handleEmptyDataTableContent: () => {
        app.$wrapperFirstInfo.empty();
        app.$wrapperSecondInfo.empty();
        app.$wrapperThirdInfo.empty();
    },
    handleRenderPeoples: (result) => {
        app.$firstColumnInfo.text('Name')
        app.$secondColumnInfo.text('Height')
        app.$thirdColumnInfo.text('Gender')
        app.$wrapperFirstInfo.append($('<tr>').text(result.name))
        app.$wrapperSecondInfo.append($('<tr>').text(result.height))
        app.$wrapperThirdInfo.append($('<tr>').text(result.gender))
    },
    handleRenderStarships: (result) => {
        app.$firstColumnInfo.text('Name')
        app.$secondColumnInfo.text('Model')
        app.$thirdColumnInfo.text('Passenger')
        app.$wrapperFirstInfo.append($('<tr>').text(result.name))
        app.$wrapperSecondInfo.append($('<tr>').text(result.model))
        app.$wrapperThirdInfo.append($('<tr>').text(result.passengers))
    },
    handleRenderPlanets: (result) => {
        app.$firstColumnInfo.text('Name')
        app.$secondColumnInfo.text('Climate')
        app.$thirdColumnInfo.text('Population')
        app.$wrapperFirstInfo.append($('<tr>').text(result.name))
        app.$wrapperSecondInfo.append($('<tr>').text(result.climate))
        app.$wrapperThirdInfo.append($('<tr>').text(result.population))
    },
}

document.addEventListener("DOMContentLoaded", app.init)