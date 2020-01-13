
const initialState = {
    hero: [
        {
          heroImageLink: '/images/hero1.png',
          heroTitle: 'Screening: DVF Secret Agent Part 1',
          heroDate: 'October 15, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        },
        {
          heroImageLink: '/images/hero2.png',
          heroTitle: 'Screening: DVF Secret Agent Part 2',
          heroDate: 'October 20, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        },
        {
          heroImageLink: '/images/hero3.png',
          heroTitle: 'Screening: DVF Secret Agent Part 3',
          heroDate: 'October 25, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        }
        
      ],
}
const sliderReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
        
    }
    return state
} 
export default sliderReducer;