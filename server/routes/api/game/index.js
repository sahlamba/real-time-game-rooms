import { Router as appRouter } from 'express'
import { createNew } from '../../../controllers/game.js'

const routes = appRouter()

routes.get('/new', createNew)

export default routes
