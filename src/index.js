// @ts-check
import Tonic from '@socketsupply/tonic'
import Route from 'route-event'

class MyCount extends Tonic {
    constructor () {
        super()
        this.state.counter = 0
    }

    // method name corresponds to the DOM event name
    click (ev) {
        ev.preventDefault()
        this.state.counter++
        this.reRender()
    }

    render () {
        return this.html`
            <button>${this.state.counter.toString()}</button>
        `
    }
}

class TheApp extends Tonic {
    constructor () {
        super()
        const { location } = window
        this.state = {
            route: (location.pathname + location.search)
        }

        const route = Route()
        route((path) => {
            this.state.route = path
        })
    }

    render () {
        return this.html`
            <div>Hello, World.</div>
            <p>the current route is: ${this.state.route}</p>
        `
    }
}

Tonic.add(MyCount)
Tonic.add(TheApp)
