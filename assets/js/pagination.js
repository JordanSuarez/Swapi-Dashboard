const pagination = {
    paginateResourceData: (resourcePath, pageDirection) => {
        switch (resourcePath) {
            case constants.PEOPLE_RESOURCE:
                const peoplePromise = app.callPromiseFromAPI(constants.PEOPLE_RESOURCE)
                peoplePromise.then((data) => {
                    if (pageDirection === 'next' ? data.next !== null : data.previous !== null) {
                        constants.PEOPLE_RESOURCE = (pageDirection === 'next' ? data.next : data.previous)
                        const newPromise = app.callPromiseFromAPI(constants.PEOPLE_RESOURCE)
                        render.handleDisplayNames(newPromise, render.handleRenderPeoples)
                    }
                })
                break
            case constants.STARSHIPS_RESOURCE:
                const starshipsPromise = app.callPromiseFromAPI(constants.STARSHIPS_RESOURCE)
                starshipsPromise.then((data) => {
                    if (pageDirection === 'next' ? data.next !== null : data.previous !== null) {
                        constants.STARSHIPS_RESOURCE = (pageDirection === 'next' ? data.next : data.previous)
                        const newPromise = app.callPromiseFromAPI(constants.STARSHIPS_RESOURCE)
                        render.handleDisplayNames(newPromise, render.handleRenderStarships)
                    }
                })
                break
            case constants.PLANETS_RESOURCE:
                const planetsPromise = app.callPromiseFromAPI(constants.PLANETS_RESOURCE)
                planetsPromise.then((data) => {
                    if (pageDirection === 'next' ? data.next !== null : data.previous !== null) {
                        constants.PLANETS_RESOURCE = (pageDirection === 'next' ? data.next : data.previous)
                        const newPromise = app.callPromiseFromAPI(constants.PLANETS_RESOURCE)
                        render.handleDisplayNames(newPromise, render.handleRenderPlanets)
                    }
                })
                break
        }
    },
    getCurrentResourcePath: () => {
        let resourcePath

        if ($("#resource-table").attr('class') === 'resource-peoples') {
            resourcePath = constants.PEOPLE_RESOURCE
        } else if ($("#resource-table").attr('class') === 'resource-starships') {
            resourcePath = constants.STARSHIPS_RESOURCE
        } else if ($("#resource-table").attr('class') === 'resource-planets') {
            resourcePath = constants.PLANETS_RESOURCE
        }
        return resourcePath
    }
}