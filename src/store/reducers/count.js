const initialState = {
  number: 100
}

export const add = num => {
  return {
    type: 'ADD',
    payLoad: num
  }
}

export const minus = num => {
  return {
    type: 'MINUS',
    payLoad: num
  }
}

const countReducer = (state = initialState, {type, payLoad}) => {
  switch(type) {
    case 'ADD':
      return {
        ...state,
        number: state.number + payLoad
      }
    case 'MINUS':
        return {
          ...state,
          number: state.number - payLoad
        }
    default:
      return state
  }
}

export default countReducer