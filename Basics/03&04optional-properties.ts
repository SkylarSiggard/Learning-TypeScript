

//todo We dont have to require each param to be pass in. We can make it optional with ? after the param name
//! There is a few ways of doing this but passing it in the function can be a little cleaner
export const getNameV1 = (params: { first: string; last?: string }) => {
    if (params.last) {
    return `${params.first} ${params.last}`;
    }
    return params.first;
};

//! Passing in one name, the first name, isn't going to prevent it from running.
const nameV1:string = getNameV1({
    first: 'Matt',
});

const nameV2:string = getNameV1({
    first: 'Matt',
    last: 'Pocock',
});



//? Another way of doing this.

export const getNameV2 = (first: string, last?: string) => {
    if (last) {
        return `${first} ${last}`;
    }
    return first;
};

const nameV3 = getNameV2("Matt");

const nameV4 = getNameV2("Matt", "Pocock");
