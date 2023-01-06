import {Express, Router} from 'express'

export default class Routes {
  constructor(
    private readonly app: Express, 
    private readonly routesList: Router[]
  ){}

  public launcher(): void {
    for(let routeController of this.routesList) {
      this.app.use(routeController)
    }
  }
}
