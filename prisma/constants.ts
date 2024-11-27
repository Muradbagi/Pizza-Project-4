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
    name: 'Куриные крылья барбекю',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE8936F8E4BBBBB02EE89E2A39A9E6.avif', 
    categoryId: 1,
  },
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
    categoryId: 3,  
  },
  {
    name: 'Сырники со сгущенным молоком',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EF90613992FBC69C3DD4772681C783.avif',
    categoryId: 4,  
  },  
  {
    name: 'Сырники с малиновым вареньем 👶',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EF9060F35D7C26BF41590B9079FEBE.avif',
    categoryId: 5,
  },  
  {
    name: 'Сырники',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EF9060DD723610942E8F368B03540A.avif',
    categoryId: 6, 
  },  
  {
    name: 'Кофе Американо',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61B044583596548A59078BBD33.avif',
    categoryId: 7,
  },  
  {
    name: 'Кофе Капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61AE1813B4AB42D8927D061035.avif',
    categoryId: 8,
  },  
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 9,
  },  
  {
    name: 'Молочный коктейль Пина Колада',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
    categoryId: 10,
  },  
];
