const app = {
    init: () => {
        render.handleLoader()
        app.makeInteractive()
    },
    makeInteractive: () => {
        const peoplesPromise = app.callPromiseFromAPI(constants.PEOPLE_RESOURCE)
        const starshipsPromise = app.callPromiseFromAPI(constants.STARSHIPS_RESOURCE)
        const planetsPromise = app.callPromiseFromAPI(constants.PLANETS_RESOURCE)

        // display count on each buttons
        render.handleDisplayCount(peoplesPromise,'.peoples-count')
        render.handleDisplayCount(starshipsPromise, '.starships-count')
        render.handleDisplayCount(planetsPromise, '.planets-count')

        // event listener
        constants.$nextPageButton.on('click', pagination.nextTablePage)
        constants.$previousPageButton.on('click', pagination.previousTablePage)
        constants.$peoplesButton.on('click', () => {render.handleDisplayNames(peoplesPromise, render.handleRenderPeoples) })
        constants.$starshipsButton.on('click', () => {render.handleDisplayNames(starshipsPromise, render.handleRenderStarships)})
        constants.$planetsButton.on('click', () => {render.handleDisplayNames(planetsPromise, render.handleRenderPlanets)})
    },
    callPromiseFromAPI: (resourcePath) => {
        return fetch(`${resourcePath}`).then((response) => {
            return response.json()
        })
    },
}

document.addEventListener("DOMContentLoaded", app.init)