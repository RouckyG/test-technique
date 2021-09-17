export const actions = {
    FIND_CLOSEST : "FIND_CLOSEST",
};

export function findClosest(list,value){
    return {
        type: actions.FIND_CLOSEST,
        list: list,
        value: value,
    };
}