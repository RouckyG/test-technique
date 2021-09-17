export const actions = {
    SUBMIT_CHANGE: 'SUBMIT_CHANGE',
};

export function submitChange(value){
    return {
        type: actions.SUBMIT_CHANGE,
        value: value,
    };
}