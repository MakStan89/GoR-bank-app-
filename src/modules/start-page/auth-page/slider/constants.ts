import firstImage from '../../../../content/images/main1.png';
import secondImage from '../../../../content/images/main2.png';
import thirdImage from '../../../../content/images/main3.png';
import fourthImage from '../../../../content/images/main4.png';

export const sliderContent = [
  {
    title: '1 Мобильное приложение GoR Online',
    subtitle: 'Банк в вашем смартфоне',
    image: firstImage,
    button: 'Узнать больше',
  },
  {
    title: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: secondImage,
    button: 'Узнать больше',
  },
  {
    title: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: thirdImage,
    button: 'Узнать больше',
  },
  {
    title: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: fourthImage,
    button: 'Узнать больше',
  },
] as const;
