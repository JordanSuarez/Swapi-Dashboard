const pagination = {
    nextTablePage: () => {
        const promise = app.callPromiseFromAPI(constants.PEOPLE_RESOURCE)
        promise.then((data) => {
            if(data.next !== null) {
                constants.PEOPLE_RESOURCE = data.next
                const newPromise = app.callPromiseFromAPI(data.next)
                render.handleDisplayNames(newPromise, render.handleRenderPeoples)
            }
        })
    },
    previousTablePage: () => {
        const promise = app.callPromiseFromAPI(constants.PEOPLE_RESOURCE)
        promise.then((data) => {
            if(data.previous !== null) {
                constants.PEOPLE_RESOURCE = data.previous
                const newPromise = app.callPromiseFromAPI(data.previous)
                render.handleDisplayNames(newPromise, render.handleRenderPeoples)
            }
        })
    },
}