const getPage = (resourcePath, keyResource, renderHandler, pageDirection) => {
    const promise = callPromiseFromAPI(resourcePath)
    promise.then((data) => {
        domContent.loader.remove()
        if (pageDirection === 'next' ? data.next !== null : data.previous !== null) {
            resources[keyResource] = (pageDirection === 'next' ? data.next : data.previous)
            const newPromise = callPromiseFromAPI(resources[keyResource])
            render.handleDisplayNames(newPromise, renderHandler)
        }
    })
}

const getCurrentResourcePath= () => {
    let resourcePath

    if ($("#resource-table").attr('class') === 'resource-peoples') {
        resourcePath = resources.peopleResource
    } else if ($("#resource-table").attr('class') === 'resource-starships') {
        resourcePath = resources.starshipsResource
    } else if ($("#resource-table").attr('class') === 'resource-planets') {
        resourcePath = resources.planetsResource
    } else if ($("#resource-table").attr('class') === 'resource-species') {
        resourcePath = resources.speciesResource
    } else if ($("#resource-table").attr('class') === 'resource-vehicles') {
        resourcePath = resources.vehiclesResource
    } else if ($("#resource-table").attr('class') === 'resource-films') {
        resourcePath = resources.filmsResource
    }
    return resourcePath
}

const callPromiseFromAPI = (resourcePath) => {
    render.handleLoader()
    return fetch(`${resourcePath}`).then((response) => {
        return response.json()
    })
}