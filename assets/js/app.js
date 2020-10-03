const app = {
    init: () => {
        render.handleLoader()
        app.displayResourcesData()
    },
    displayResourcesData: () => {
        const peoplesPromise = callPromiseFromAPI(resources.PEOPLE_RESOURCE)
        const starshipsPromise = callPromiseFromAPI(resources.STARSHIPS_RESOURCE)
        const planetsPromise = callPromiseFromAPI(resources.PLANETS_RESOURCE)

        // display count on each buttons
        render.handleDisplayCount(peoplesPromise,'.peoples-count')
        render.handleDisplayCount(starshipsPromise, '.starships-count')
        render.handleDisplayCount(planetsPromise, '.planets-count')

        // event listener
        domContent.$nextPageButton.on('click', () => {pagination.paginateResourceData(getCurrentResourcePath(), 'next')})
        domContent.$previousPageButton.on('click', () => {pagination.paginateResourceData(getCurrentResourcePath(), 'previous')})
        domContent.$peoplesButton.on('click', () => {render.handleDisplayNames(peoplesPromise, render.handleRenderPeoples), render.handleResetPeopleResourcePath() })
        domContent.$starshipsButton.on('click', () => {render.handleDisplayNames(starshipsPromise, render.handleRenderStarships), render.handleResetStarshipsResourcePath()})
        domContent.$planetsButton.on('click', () => {render.handleDisplayNames(planetsPromise, render.handleRenderPlanets), render.handleResetPlanetsResourcePath()})
    },

}

document.addEventListener("DOMContentLoaded", app.init)