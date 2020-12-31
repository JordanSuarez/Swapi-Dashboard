const getPage = (resourcePath, keyResource, renderHandler, pageDirection) => {
    const promise = callPromiseFromAPI(resourcePath)
    promise.then((data) => {
        // Remove the loader
        domContent.loader.remove()
        // If data.next !== null, that means there is data to the next page
        if (pageDirection === 'next' ? data.next !== null : data.previous !== null) {
            // resources[keyResource] correspond to resources.peopleResource
            // in the case where keyResource === peopleResource
            resources[keyResource] = (pageDirection === 'next' ? data.next : data.previous)
            const newPromise = callPromiseFromAPI(resources[keyResource])
            render.handleDisplayNames(newPromise, renderHandler)
        }
    }).catch(() => {
        domContent.loader.remove()
    })
}

// Check which resources are displayed in the table
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
    }).catch(() => {
        domContent.loader.remove()
    })
}
