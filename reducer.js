const initState = {
  cars: [
    'BMW',
    'Mazda',
  ]
}

const carReducer = (state=initState, action, args) => {
  switch (action) {
    case 'ADD': 
      return {
        ...state,
        cars: [
          ...state.cars,
          args[0]
        ]
      }
    default:
      return state
  }
}

export default carReducer