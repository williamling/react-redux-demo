let initState = {
  name: '富国基金',
  description: '我们都是前端爱好者！',
}

export default function InfoReducer(state, action) {
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}