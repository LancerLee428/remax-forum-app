export interface IHomeImg {
  id: number,
  imgSrc: string,
  description?: string
}

export interface ICardImg {
  id: number,
  title: string,
  description: string,
  images: string[]
}

export interface IMsgImg {
  id: string,
  has: boolean,
  count: number | null,
  imgSrc: string,
  description?: string
}

export interface IMsgTalk {
  id: number,
  userImage: string,
  userName: string,
  lastMessage: string,
  lastTime: string,
  productImage: string
}