
const initialState = {
    posts: [
        {
          postImageLink: '/images/post1.png',
          postDate: 'FEBRUARY 10, 2017',
          postTitle: 'Bureaux exquisite delightful carefully curated soft power.',
          postLink: '#',
          order:1,
        },
        {
          postImageLink: '/images/post2.png',
          postDate: 'FEBRUARY 2, 2017',
          postTitle: 'Sharp bureaux sleepy K-pop carefully curated.',
          postLink: '#',
          order:2,
        },
        {
          postImageLink: '/images/post3.png',
          postDate: 'JANUARY 27, 2017',
          postTitle: 'St Moritz uniforms Beams.',
          postLink: '#',
          order:3,
        },
        {
          postImageLink: '/images/post5.png',
          postDate: 'JANUARY 18, 2017',
          postTitle: 'K-pop extraordinary.',
          postLink: '#',
          order:6,
        },
        {
          postImageLink: '/images/post4.png',
          postDate: 'JANUARY 21, 2017',
          postTitle: 'Esse airport veniam ryokan soft power.',
          postLink: '#'
          ,
          order:5,
        },
        {
          postImageLink: '/images/post6.png',
          postDate: 'JANUARY 12, 2017',
          postTitle: 'Artisanal iconic cutting-edge business class.',
          postLink: '#',
          order:4,
        },
      ]
}
const postReducer = (state=initialState, action) => {
    switch(action.type) {       
        default:
            return state;    
    }
    return state
} 
export default postReducer;