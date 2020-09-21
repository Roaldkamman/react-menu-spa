const INITIAL_STATE = {
    sections: [
        {
          title: 'food',
          imageUrl: 'https://i.ibb.co/TkqgBj0/tacos.jpg',
          id: 1,
          linkUrl: 'menu/food'
        },
        {
          title: 'drinks',
          imageUrl: 'https://i.ibb.co/prrP8Cc/Peach-margaritas.jpg',
          id: 2,
          linkUrl: 'menu/drinks'
        },
        {
          title: 'dessert',
          imageUrl: 'https://i.ibb.co/YPnYwL3/churros.jpg',
          id: 3,
          linkUrl: 'menu/dessert'
        }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
};

export default directoryReducer;