
//todo We need to created a interface and set the typing to what we need. We are somewhat setting up a type 
interface Add {
    first: number;
    second: number;
}
//todo we can do three different ways to pass this as a function. Inline, type or interface
//! Creating a Type or interface is the better options and doesnt really matter which one you do. 
export const addTwoNumbers = (params: Add) => {
    return params.first + params.second;
};

//todo We can only pass something like this if we have the interface 
addTwoNumbers({
    first: 2,
    second: 4,
})

addTwoNumbers({
    first: 10,
    second: 20,
})