export class Serie {
    number: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image:string;
  
    constructor(number: number, name: string, channel: string, seasons: number,description: string,link:string, image:string) {
      this.number = number;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.image = image;
    }
  }