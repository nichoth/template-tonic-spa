// @ts-check
import Tonic from '@socketsupply/tonic'

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
        this.state = { route: '/' }
    }

    render () {
        return this.html`
            <div>Hello, World.</div>
        `
    }
}

Tonic.add(MyCount)
Tonic.add(TheApp)
