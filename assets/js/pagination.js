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
        }
    },
}