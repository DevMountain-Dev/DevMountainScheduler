import {combineReducers} from 'redux';
import templateReducer from './reducers/templateReducer'

export default combineReducers({template : templateReducer});

//STATE
/*
    {
        template: {
            name: '',
            length: 90,
            submitClicked: false,
            days: [],
            activities: [],
            showPopUp: false,
            dayClicked: '',
            dayData: ''
        }
    }


*/