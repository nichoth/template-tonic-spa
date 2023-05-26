// @ts-check
import Tonic from '@socketsupply/tonic'
import Route from 'route-event'
import { routes, createRouter } from './routes.js'

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

        this.router = createRouter()
        const onRoute = Route()
        onRoute((path) => {
            console.log('on route', path)
            if (path !== this.state.route) {
                console.log('not eq', path, this.state.route)
                this.state.route = path
                this.reRender()
            }
        })
    }

    render () {
        const match = this.router.match(this.state.route)

        if (!match) return this.html`<h1>404</h1>`

        const view = match.action(match)
        console.log('viewwwwww', view)


        const child = Tonic.getTagName(view.name)

        console.log('route tagggggg', child)

        return this.html`
            <div>Hello, World.</div>
            <ul>
                <li>
                    <a href="/aaa">aaa</a>
                </li>
                <li>
                    <a href="/bbb">bbb</a>
                </li>
                <li>
                    <a href="/ccc">ccc</a>
                </li>
            </ul>

            <p>the current route is: ${this.state.route}</p>

            <${child} />
        `
    }
}

routes.forEach(route => Tonic.add(route))
Tonic.add(MyCount)
Tonic.add(TheApp)
