const pagination = {
    paginateResourceData: (resourcePath, pageDirection) => {
        switch (resourcePath) {
            case resources.PEOPLE_RESOURCE:
                getPage(resources.PEOPLE_RESOURCE, 'PEOPLE_RESOURCE', render.handleRenderPeoples, pageDirection)
                break
            case resources.STARSHIPS_RESOURCE:
                getPage(resources.STARSHIPS_RESOURCE, 'STARSHIPS_RESOURCE', render.handleRenderStarships, pageDirection)
                break
            case resources.PLANETS_RESOURCE:
                getPage(resources.PLANETS_RESOURCE, 'PLANETS_RESOURCE', render.handleRenderPlanets, pageDirection)
                break
        }
    },
}