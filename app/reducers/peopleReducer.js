const initialState = [
    'Alex',
    'John',
    'Sam',
    'George',
];

const peopleReducer = (state = initialState, action) => {

  if(action.type === 'ADD_NEW_USER') {
    return state.concat('Alexxxx_' + Date.now())
  }

  return state
};

export default peopleReducer;