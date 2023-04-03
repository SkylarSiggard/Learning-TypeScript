

interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
//! If we dont have : User the error is where the getUserId() by passing it here we get the error here.
//* We will know where the error is and we get auto complete 
const defaultUser: User = {
    id: 1,
    firstName: 'skylar',
    lastName: 'siggard',
    isAdmin: true,
};

const getUserId = (user: User) => {
    return user.id;
};

getUserId(defaultUser)
