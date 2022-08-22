import firstImage from '../../../content/images/main1.png';
import secondImage from '../../../content/images/main2.png';
import thirdImage from '../../../content/images/main3.png';
import fourthImage from '../../../content/images/main4.png';

export const russianLanguage = {
  buttonText: 'Узнать больше',
  info: 'Скачать мобильный банк Affinity Online',
  slider: [
    {
      title: '1 Мобильное приложение Affinity Online',
      subtitle: 'Банк в вашем смартфоне',
      image: firstImage,
    },
    {
      title: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: secondImage,
    },
    {
      title: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: thirdImage,
    },
    {
      title: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: fourthImage,
    },
  ],
} as const;
