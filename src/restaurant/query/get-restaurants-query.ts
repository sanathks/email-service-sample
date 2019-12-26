export class GetRestaurantsQuery {
  private ids: string[]

  constructor (ids: string[]) {
    this.ids = ids
  }

  public getIds () {
    return this.ids
  }
}
