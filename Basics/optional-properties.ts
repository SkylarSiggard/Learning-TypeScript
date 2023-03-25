

//todo We dont have to require each param to be pass in. We can make it optional with ? after the param name
export const getName = (params: { first: string; last?: string }) => {
    if (params.last) {
    return `${params.first} ${params.last}`;
    }
    return params.first;
};

//! Passing in one name, the first name, isn't going to prevent it from running.
const nameV1:string = getName({
    first: 'Matt',
});

const nameV2:string = getName({
    first: 'Matt',
    last: 'Pocock',
});