
export const SET_NUMDAYS = 'SET_NUMDAYS';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';

export function setNumDaysAction(number){
    return {type: SET_NUMDAYS, num: number};
}

export function updateTemplate(propsToMerge){
    return {type: UPDATE_TEMPLATE, newProps: propsToMerge};
}

const defaultTemplateState = {
        name: '',
        length: 0,
        submitClicked: false,
        days: [],
        activities: [],
        showPopUp: false,
        dayClicked: '',
        dayData: ''
    };

export default function reducer(state = defaultTemplateState, action){
    switch(action.type){
        case UPDATE_TEMPLATE:
            const newState = Object.assign(state, action.newProps);
            return newState;
        default:
            return state;
    }
}