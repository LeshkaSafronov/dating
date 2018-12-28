export class Photo {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public avatar: string = '',
              public photo: string = '',
              public comments: number,
              public likes: number,
              public createdAt: string = '') {
  }
}
