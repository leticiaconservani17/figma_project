class Restaurant {
  title: string
  description: string
  image: string
  infos: string[]
  rank: string
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    infos: string[],
    rank: string,
    id: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.rank = rank
    this.title = title
  }
}

export default Restaurant
