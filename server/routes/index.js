import { Router as appRouter } from 'express'
import gameApi from './api/game/index.js'

const routes = appRouter()

routes.use('/api/game', gameApi)

export default routes
