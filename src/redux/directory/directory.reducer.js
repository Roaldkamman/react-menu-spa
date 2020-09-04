const INITIAL_STATE = {
    sections: [
        {
          title: 'food',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: '/food'
        },
        {
          title: 'drinks',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: '/drinks'
        },
        {
          title: 'dessert',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: '/dessert'
        }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
};

export default directoryReducer;