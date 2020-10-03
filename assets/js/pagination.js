const pagination = {
    paginateResourceData: (resourcePath, pageDirection) => {
        switch (resourcePath) {
            case resources.peopleResource:
                getPage(resources.peopleResource, 'peopleResource', render.handleRenderPeoples, pageDirection)
                break
            case resources.starshipsResource:
                getPage(resources.starshipsResource, 'starshipsResource', render.handleRenderStarships, pageDirection)
                break
            case resources.planetsResource:
                getPage(resources.planetsResource, 'planetsResource', render.handleRenderPlanets, pageDirection)
                break
            case resources.speciesResource:
                getPage(resources.speciesResource, 'speciesResource', render.handleRenderSpecies, pageDirection)
                break
            case resources.vehiclesResource:
                getPage(resources.vehiclesResource, 'vehiclesResource', render.handleRenderVehicles, pageDirection)
                break
            case resources.filmsResource:
                getPage(resources.filmsResource, 'filmsResource', render.handleRenderFilms, pageDirection)
                break
        }
    },
}