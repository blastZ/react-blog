const initState = {
  posts: [
    {
      id: 'ABCDEFGfdsa',
      title: 'React全栈技术详解',
      timestamp: 'September 20, 2017',
      shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      cover: 'https://cdn-images-1.medium.com/max/2000/1*XcGM-8E_hGl4fpAr9wJIsA.png'
    },
    {
      id: 'A325GaDKfdsaLG',
      title: 'React Native 使用指南',
      timestamp: 'September 25, 2017',
      shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      cover: 'https://webinerds.com/app/uploads/2017/11/d49396_d9c5d967608d4bc1bcf09c9574eb67c9-mv2.png'
    },
    {
      id: 'A325GaDfdasKfdsaLG',
      title: 'Node.js 进阶',
      timestamp: 'September 15, 2017',
      shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
    },
    {
      id: 'A325GaDfdasKfdfdsasaLG',
      title: 'Node.js 进阶',
      timestamp: 'September 15, 2017',
      shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
    },
    {
      id: 'A325GaDfdasKffdasfdfdsasaLG',
      title: 'Node.js 进阶',
      timestamp: 'September 15, 2017',
      shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
    },
  ]
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default reducer;
