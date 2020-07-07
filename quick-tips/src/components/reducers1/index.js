import { FETCH_START, 
        FETCH_SUCCESS,
        FETCH_ERROR,
        
        HOW_TO_START,
        HOW_TO_SUCCESS,
        HOW_TO_ERROR,

        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_ERROR,

        SIGNUP_START,
        SIGNUP_SUCCESS,
        SIGNUP_ERROR,

        DELETE_START,
        DELETE_SUCCESS,
        DELETE_ERROR,

        EDIT_START,
        EDIT_SUCCESS,
        EDIT_ERROR,

} from '../../actions1';

export const initialState = {
    Howtos: [],
    Howto: null,
    user: [],
    loggingIn: false,
    signingUp: false,
    gettingHowtos: false,
    addingHowto:false,
    error: '',
    token: localStorage.getItem('token'),
    username:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
    case FETCH_START:
    return {
        ...state,
        gettingHowtos: true
        
    };

    case FETCH_SUCCESS: 
        return {
            ...state,
            gettingHowtos: false,
            Howtos: action.payload
        };
        
    case FETCH_ERROR: 
    return {
       ...state,
       gettingHowtos: false,
       error: action.payload,
    };
    case HOW_TO_START:
    return {
        ...state,
        addingHowto: true,

    }
    
    case HOW_TO_SUCCESS:
    return{
        ...state, //all state?
        addingHowto: false,
        Howto: action.payload
    };
   case HOW_TO_ERROR:
   return{
       ...state,
       addingHowto: false,
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
     err: action.payload
   };

   case DELETE_START:
   return {
     ...state,

   };

   case DELETE_SUCCESS: 
   return {
     ...state,
   };
   
   case DELETE_ERROR:
   return {
     ...state,
   };

   case EDIT_START:
   return {
     ...state,
   };

   case EDIT_SUCCESS:
   return {
     ...state,
   }

   case EDIT_ERROR:
   return {
   ...state,
   }
    default:
    return state;
}
}

export default reducer;