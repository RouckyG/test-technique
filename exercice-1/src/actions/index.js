export const actions = {
    CHANGE_TOGGLEBUTTON_VALUE: 'CHANGE_TOGGLEBUTTON_VALUE',
    CHANGE_TEXTFIELD_VALUE: 'CHANGE_TEXTFIELD_VALUE',
};

export function changeToggleButtonValue(){
    return {
        type: actions.CHANGE_TOGGLEBUTTON_VALUE,
    };
}

export function changeTextFieldValue(value){
    return {
        type: actions.CHANGE_TEXTFIELD_VALUE,
        value: value,
    };
}