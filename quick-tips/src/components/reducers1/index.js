import { START_FETCHING, 
        FETCH_SUCCESS,
        FETCH_FAILURE,
        
        ADD_HOW_TO,
        HOW_TO_SUCCESS,
        HOW_TO_FAIL,

        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_ERROR,

        SIGNUP_START,
        SIGNUP_SUCCESS,
        SIGNUP_ERROR
       

} from '../../actions1';

const initialState = {
    Howtos: [],
    Howto: null,
    user: [],
    loggingIn: false,
    signingUp: false,
    gettingHowtos: false,
    addingHowto:false,
    error: '',
    token: localStorage.getItem('token'),
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case START_FETCHING:
    return {
        ...state,
        gettingHowtos: true,
        
    };

    case FETCH_SUCCESS: 
        return {
            ...state,
            gettingHowtos: false,
            Howtos: action.payload
        };
        
    case FETCH_FAILURE: 
    return {
       ...state,
       gettingHowtos: false,
       error: action.payload,
    };
    case ADD_HOW_TO:
    return {
        ...state,
        addingHowto: true,

    }
    
    case HOW_TO_SUCCESS:
    return{
        ...state,
        isFetching: false,
        error: '',
        Howto: action.payload
    };
   case HOW_TO_FAIL:
   return{
       ...state,
       isFetching: false,
       error: action.payload
   };
   case LOGIN_START:
   return {
     ...state,
     loggingIn: true
   };
 case LOGIN_SUCCESS:
   return {
     ...state,
     loggingIn: false,
     username: action.payload.username
   };
 case LOGIN_ERROR:
   return {
     ...state,
     loggingIn: false,
     error: action.payload
   };

 case SIGNUP_START:
   return {
     ...state,
     signingUp: true
   };

 case SIGNUP_SUCCESS:
   return {
     ...state,
     user: action.payload,
     signingUp: false,
     token: action.payload
   };

 case SIGNUP_ERROR:
   return {
     ...state,
     signingUp: false,
     error: action.payload
   };
    default:
    return state;
}
}

export default reducer;