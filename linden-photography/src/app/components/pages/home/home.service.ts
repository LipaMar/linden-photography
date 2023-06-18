import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  getData() {
    return [
      {
        itemImageSrc:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/306924412_612649157053931_8756807039693979416_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=PY52bVTUKsAAX_KLIFZ&_nc_ht=scontent-waw1-1.xx&oh=00_AfB1tfNFLPNq6WGImeJtZD2N-yftXPOefDweiCAd07VB9g&oe=6492622E',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/354430876_837078081277703_8568494128534082995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=uwdIi-p06gcAX_RC6Tz&_nc_ht=scontent-waw1-1.xx&oh=00_AfAHASWWG480XDJJqHTUhJSbFF3LfCDACRhbSZuPkYo-DQ&oe=6492A69E',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349120837_1954476131581012_3971011842691943232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=BLWjcr1mOogAX_QTQb9&_nc_ht=scontent-waw1-1.xx&oh=00_AfDWOBH7-px-HGcLGsxOp3QUVT8PjCs6wS3WAVr9FfrnCw&oe=64926E18',
        
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/118914237_115179170320283_6912421961853038644_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=n9NtKGirkwIAX_vjoQT&_nc_ht=scontent-waw1-1.xx&oh=00_AfBfZfXf2KVe2J-nCA-HVn_5vAGFgL2PMe9y6XuHEHTfdA&oe=64B559B8',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/347604155_1403651760431911_3295590842833783488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=eogecxMPCtoAX9OpASw&_nc_ht=scontent-waw1-1.xx&oh=00_AfBCQcIqbrVf8kQSiDZsVrPGRXNKZKpARPdygjTlJoNE8g&oe=64934B64',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];
  }

}