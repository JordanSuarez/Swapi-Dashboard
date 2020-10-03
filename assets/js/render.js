const render = {
    handleLoader: () => {
        domContent.wrapperContent.prepend(domContent.loader)
    },
    handleDisplayCount: (promise, className) => {
        promise.then((data) => {
            domContent.loader.remove()
            return $(className).text(data.count)
        })
    },
    handleDisplayNames: (promise, resourceMethod) => {
        render.handleEmptyDataTableContent()
        promise.then((data) => {
            domContent.loader.remove()
            data.results.forEach((result) => {
                resourceMethod(result)
            })
        })
    },
    handleEmptyDataTableContent: () => {
        domContent.wrapperFirstInfo.empty();
        domContent.wrapperSecondInfo.empty();
        domContent.wrapperThirdInfo.empty();
    },
    handleRenderPeoples: (result) => {
        render.handleResourceTableClass('resource-peoples')
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Height')
        domContent.thirdColumnInfo.text('Gender')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.height))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.gender))
    },
    handleRenderSpecies: (result) => {
        render.handleResourceTableClass('resource-species')
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Classification')
        domContent.thirdColumnInfo.text('Language')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.classification))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.language))
    },
    handleRenderVehicles: (result) => {
        render.handleResourceTableClass('resource-vehicles')
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Model')
        domContent.thirdColumnInfo.text('Passenger')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.model))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.passengers))
    },
    handleRenderStarships: (result) => {
        render.handleResourceTableClass('resource-starships')
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Model')
        domContent.thirdColumnInfo.text('Passenger')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.model))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.passengers))
    },
    handleRenderPlanets: (result) => {
        render.handleResourceTableClass('resource-planets')
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Climate')
        domContent.thirdColumnInfo.text('Population')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.climate))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.population))
    },
    handleRenderFilms: (result) => {
        render.handleResourceTableClass('resource-films')
        domContent.firstColumnInfo.text('Title')
        domContent.secondColumnInfo.text('Director')
        domContent.thirdColumnInfo.text('Producer')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.title))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.director))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.producer))
    },
    handleResourceTableClass: (className) => {
        $("#resource-table").removeClass()
        $("#resource-table").addClass(className)
    },
    handleResetPeopleResourcePath: () => {
        return resources.peopleResource = 'https://swapi.dev/api/people/'
    },
    handleResetSpeciesResourcePath: () => {
        return resources.speciesResource = 'https://swapi.dev/api/species/'
    },
    handleResetVehiclesResourcePath: () => {
        return resources.vehiclesResource = 'https://swapi.dev/api/vehicles/'
    },
    handleResetStarshipsResourcePath: () => {
        return resources.starshipsResource = 'https://swapi.dev/api/starships/'
    },
    handleResetPlanetsResourcePath: () => {
        return resources.planetsResource = 'https://swapi.dev/api/planets/'
    },
    handleResetFilmsResourcePath: () => {
        return resources.filmsResource = 'https://swapi.dev/api/films/'
    },
}