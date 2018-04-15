// state argument is not application state, 
// only the state this reducis is responsible for
export default function (state = null, action){
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //must return not undefined value state = null
  return state;
}