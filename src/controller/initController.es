import indexController from './indexController';
// response 
const initController = {
	init(app, router) {
		app.use(router(_ => {
			_.get('/index/index', indexController.init() )
			_.get('/index/update', indexController.update())
            _.get('/index/star', indexController.star())
            _.get('/index/praise', indexController.praise())
            _.get('/index/advertisement',indexController.advertisement())
		}))
		
	}

}
export default initController;