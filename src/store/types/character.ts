interface Icharacters {
    info: {
      count: Number,
      pages: Number,
      next: string,
      prev: string
    },
    results:
      {
        id: Number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
          name: string,
          url: string
        },
        location: {
          name: string,
          url: string
        },
        image: string,
        episode: string[],
        url: string,
        created: string
      }[]
  }

export type characters = Icharacters | null