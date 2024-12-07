export const categories = [
  {
    name: 'Пиццы',
  },    
  {
    name: 'Завтрак',
  },    
  {
    name: 'Закуски',
  },    
  {
    name: 'Коктели',
  },    
  {
    name: 'Напитки',
  },    
];


export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl:
       'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с пепперони',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
    categoryId: 2,
  },  
  {
    name: 'Омлет сырный',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE797033873EB1B4B77F7E70BBA37E.avif',
    categoryId: 2,  
  },
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 2,
  },  
  {
    name: 'Дэнвич с говядиной',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EF023C30BF9E6BA72D6ABB6375A56D.avif',
    categoryId: 3,
  },  
  {
    name: 'Куриные наггетсы',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif',
    categoryId: 3,
  },  
  {
    name: 'Картофель из печи с соусом 🌱👶',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED646A874549F90802E75F4D358ED.avif',
    categoryId: 3,
  },  
  {
    name: 'Достер',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE796F96D11392A2F6DD73599921B9.avif',
    categoryId: 3,
  },  
  {
    name: 'Острый Додстер 🌶🌶',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE796FD3B594068F7A752DF8161D04.avif',
    categoryId: 3,
  },  
  {
    name: 'Молочный коктейль Пина Колада',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
    categoryId: 4,
  },  
  {
    name: 'Молочный коктейль Ежевика-малина',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EEB92C801211CBAF91BB30F77568C5.avif',
    categoryId: 4,
  },  
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EF5BC24DC566B0918B1EDE2949A71A.avif',
    categoryId: 4,
  },  
  {
    name: 'Классический молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EF5BC13531CC94BB01BEF8FA0CC92F.avif',
    categoryId: 4,
  },  
  {
    name: 'Кофе Капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61AE1813B4AB42D8927D061035.avif',
    categoryId: 5,
  },  
  {
    name: 'Кофе Карамельный капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
    categoryId: 5,
  },  
  {
    name: 'Кофе Кокосовый латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61B19FA07090EE88B0ED347F42.avif',
    categoryId: 5,
  },  
  {
    name: 'Кофе Американо',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61B044583596548A59078BBD33.avif',
    categoryId: 5,  
  }, 
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 5,  
  }, 
];
