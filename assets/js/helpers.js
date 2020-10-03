const getPage = (url, keyResource, renderHandler, pageDirection) => {
    const promise = callPromiseFromAPI(url)
    promise.then((data) => {
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
    }
    return resourcePath
}

const callPromiseFromAPI = (resourcePath) => {
    return fetch(`${resourcePath}`).then((response) => {
        return response.json()
    })
}