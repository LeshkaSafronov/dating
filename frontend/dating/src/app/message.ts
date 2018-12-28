export class Message {
  constructor(public id: number,
              public firstName: string = '',
              public lastName: string = '',
              public avatar: string,
              public createdAt: string,
              public message: string) {
  }
}
