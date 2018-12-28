export class People {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public status: string = '',
              public connection: string = '',
              public createdAt: string = '',
              public friendsCount: number,
              public avatar: string) {
  }
}
