const render = {
    handleLoader: () => {
        domContent.$peoplesButton.append(app.$loader)
        domContent.$starshipsButton.append(app.$loader)
        domContent.$planetsButton.append(app.$loader)
        domContent.$nextPageButton.append(app.$loader)
        domContent.$previousPageButton.append(app.$loader)
    },
    handleDisplayCount: (promise, className) => {
        promise.then((data) => {
            console.log(data);
            domContent.$loader.remove()
            return $(className).text(data.count)
        })
    },
    handleDisplayNames: (promise, resourceMethod) => {
        render.handleEmptyDataTableContent()
        promise.then((data) => {
            domContent.$loader.remove()
            data.results.forEach((result) => {
                resourceMethod(result)
            })
        })
    },
    handleEmptyDataTableContent: () => {
        domContent.$wrapperFirstInfo.empty();
        domContent.$wrapperSecondInfo.empty();
        domContent.$wrapperThirdInfo.empty();
    },
    handleRenderPeoples: (result) => {
        render.handleResourceTableClass('resource-peoples')
        domContent.$firstColumnInfo.text('Name')
        domContent.$secondColumnInfo.text('Height')
        domContent.$thirdColumnInfo.text('Gender')
        domContent.$wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.$wrapperSecondInfo.append($('<tr>').text(result.height))
        domContent.$wrapperThirdInfo.append($('<tr>').text(result.gender))
    },
    handleRenderStarships: (result) => {
        render.handleResourceTableClass('resource-starships')
        domContent.$firstColumnInfo.text('Name')
        domContent.$secondColumnInfo.text('Model')
        domContent.$thirdColumnInfo.text('Passenger')
        domContent.$wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.$wrapperSecondInfo.append($('<tr>').text(result.model))
        domContent.$wrapperThirdInfo.append($('<tr>').text(result.passengers))
    },
    handleRenderPlanets: (result) => {
        render.handleResourceTableClass('resource-planets')
        domContent.$firstColumnInfo.text('Name')
        domContent.$secondColumnInfo.text('Climate')
        domContent.$thirdColumnInfo.text('Population')
        domContent.$wrapperFirstInfo.append($('<tr>').text(result.name))
        domContent.$wrapperSecondInfo.append($('<tr>').text(result.climate))
        domContent.$wrapperThirdInfo.append($('<tr>').text(result.population))
    },
    handleResourceTableClass: (className) => {
        $("#resource-table").removeClass()
        $("#resource-table").addClass(className)
    },
    handleResetPeopleResourcePath: () => {
        return resources.PEOPLE_RESOURCE = 'https://swapi.dev/api/people/'
    },
    handleResetStarshipsResourcePath: () => {
        return resources.STARSHIPS_RESOURCE = 'https://swapi.dev/api/starships/'
    },
    handleResetPlanetsResourcePath: () => {
        return resources.PLANETS_RESOURCE = 'https://swapi.dev/api/planets/'
    }
}