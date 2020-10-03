const app = {
    init: () => {
        render.handleLoader()
        app.displayResourcesData()
    },
    displayResourcesData: () => {
        const peoplesPromise = callPromiseFromAPI(resources.peopleResource)
        const speciesPromise = callPromiseFromAPI(resources.speciesResource)
        const vehiclesPromise = callPromiseFromAPI(resources.vehiclesResource)
        const starshipsPromise = callPromiseFromAPI(resources.starshipsResource)
        const planetsPromise = callPromiseFromAPI(resources.planetsResource)
        const filmsPromise = callPromiseFromAPI(resources.filmsResource)

        // display count on each buttons
        render.handleDisplayCount(peoplesPromise,'.peoples-count')
        render.handleDisplayCount(speciesPromise, '.species-count')
        render.handleDisplayCount(vehiclesPromise, '.vehicles-count')
        render.handleDisplayCount(starshipsPromise, '.starships-count')
        render.handleDisplayCount(planetsPromise, '.planets-count')
        render.handleDisplayCount(filmsPromise, '.films-count')

        // event listener
        domContent.nextPageButton.on('click', () => {pagination.paginateResourceData(getCurrentResourcePath(), 'next')})
        domContent.previousPageButton.on('click', () => {pagination.paginateResourceData(getCurrentResourcePath(), 'previous')})
        domContent.peoplesButton.on('click', () => {render.handleDisplayNames(peoplesPromise, render.handleRenderPeoples), render.handleResetPeopleResourcePath()})
        domContent.speciesButton.on('click', () => {render.handleDisplayNames(speciesPromise, render.handleRenderSpecies), render.handleResetSpeciesResourcePath()})
        domContent.vehiclesButton.on('click', () => {render.handleDisplayNames(vehiclesPromise, render.handleRenderVehicles), render.handleResetVehiclesResourcePath()})
        domContent.starshipsButton.on('click', () => {render.handleDisplayNames(starshipsPromise, render.handleRenderStarships), render.handleResetStarshipsResourcePath()})
        domContent.planetsButton.on('click', () => {render.handleDisplayNames(planetsPromise, render.handleRenderPlanets), render.handleResetPlanetsResourcePath()})
        domContent.filmsButton.on('click', () => {render.handleDisplayNames(filmsPromise, render.handleRenderFilms), render.handleResetFilmsResourcePath()})
    },

}

document.addEventListener("DOMContentLoaded", app.init)