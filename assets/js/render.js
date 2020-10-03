const render = {
    handleLoader: () => {
        domContent.peoplesButton.append(app.loader)
        domContent.speciesButton.append(app.loader)
        domContent.vehiclesButton.append(app.loader)
        domContent.starshipsButton.append(app.loader)
        domContent.planetsButton.append(app.loader)
        domContent.filmsButton.append(app.loader)
        domContent.nextPageButton.append(app.loader)
        domContent.previousPageButton.append(app.loader)
    },
    handleDisplayCount: (promise, className) => {
        promise.then((data) => {
            console.log(data);
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
        domContent.secondColumnInfo.text('Height')
        domContent.thirdColumnInfo.text('Gender')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.height))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.gender))
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
        domContent.firstColumnInfo.text('Name')
        domContent.secondColumnInfo.text('Height')
        domContent.thirdColumnInfo.text('Gender')
        domContent.wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.wrapperSecondInfo.append($('<tr>').text(result.height))
        domContent.wrapperThirdInfo.append($('<tr>').text(result.gender))
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