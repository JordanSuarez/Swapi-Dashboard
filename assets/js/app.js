const app = {
    API_URL: 'https://swapi.dev/api/',
    PEOPLE_RESOURCE: 'people/',
    STARSHIPS_RESOURCE: 'starships/',
    PLANETS_RESOURCE: 'planets/',
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

    init: () => {
        console.log("init")
        app.handleLoader()
        app.handleDisplayNames(app.PEOPLE_RESOURCE, app.$peoplesButton)
        app.handleDisplayData()
    },
    handleLoader: () => {
        app.$peoplesButton.append(app.$loader)
        app.$starshipsButton.append(app.$loader)
        app.$planetsButton.append(app.$loader)
        // app.$previousPageButton.append(app.$loader)
        // app.$nextPageButton.append(app.$loader)
    },
    handleDisplayData: () => {
        const peoplesCount = app.handleDisplayCount(app.PEOPLE_RESOURCE,'.peoples-count')
        const peoplesData = app.handleClickResourceButton(app.$peoplesButton, app.PEOPLE_RESOURCE)

        const starshipsCount = app.handleDisplayCount(app.STARSHIPS_RESOURCE, '.starships-count')
        const starshipsData = app.handleClickResourceButton(app.$starshipsButton, app.STARSHIPS_RESOURCE)

        const planets = app.handleDisplayCount(app.PLANETS_RESOURCE, '.planets-count')
        const planetsData = app.handleClickResourceButton(app.$planetsButton, app.PLANETS_RESOURCE)
    },
    callPromiseFromAPI: (nameResource) => {
        return fetch(`${app.API_URL}${nameResource}`).then((response) => {
            return response.json()
        })
    },
    handleDisplayCount: (nameResource, className) => {
        const promise = app.callPromiseFromAPI(nameResource)
        promise.then((data) => {
            console.log(data);
            app.$loader.remove()
            return app.handleDisplayCountsOfResources(className, data.count)
        })
    },
    handleDisplayCountsOfResources: (className, count) => {
        $(className).text(count)
    },
    handleClickResourceButton: (button, resourceName) => {
        button.click(() => {
            app.handleDisplayNames(resourceName, button)
        });
    },
    handleClickPreviousButton: () => {

    },
    handleClickNextButton: () => {

    },
    handleDisplayNames: (resourceName, button) => {
        const promise = app.callPromiseFromAPI(resourceName)
        app.handleEmptyDataTableContent($(this))
        promise.then(function(data) {
            app.$loader.remove()
            data.results.forEach((result) => {
                if (button === app.$peoplesButton ) {
                    return app.handleRenderPeoples(result)
                } else if (button === app.$starshipsButton) {
                   return app.handleRenderStarships(result)
                } else if (button === app.$planetsButton) {
                   return app.handleRenderPlanets(result)
                }
            })
        })
    },
    handleEmptyDataTableContent: ($button) => {
        $button.attr('disabled', true);
        $button.removeAttr('disabled');
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