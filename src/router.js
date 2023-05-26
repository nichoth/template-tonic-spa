import Router from '@nichoth/routes'
import Tonic from '@socketsupply/tonic'

const router = Router()

class RouteHome extends Tonic {
    render () {
        return this.html`<h1>route home</h1>`
    }
}
Tonic.add(RouteHome)

router.addRoute('/', () => {
    return RouteHome
})

router.addRoute('/aaa', (match) => {
    class RouteAaa extends Tonic {
        render () {
            return this.html`<h1>route aaa</h1>`
        }
    }

    return RouteAaa
})

router.addRoute('/bbb', (match) => {

})

router.addRoute('/ccc', (match) => {

})

export { router }
