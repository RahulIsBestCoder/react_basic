export const getRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Helper function to generate random phone number
export const getRandomPhoneNumber = () => {
    const randomDigits = () => Math.floor(Math.random() * 10);
    return `(${randomDigits()}${randomDigits()}${randomDigits()}) ${randomDigits()}${randomDigits()}${randomDigits()}-${randomDigits()}${randomDigits()}${randomDigits()}${randomDigits()}`;
};

// Helper function to generate random email
export const getRandomEmail = () => {
    const domains = ['example.com', 'mail.com', 'random.com'];
    return `${getRandomString(5)}@${domains[Math.floor(Math.random() * domains.length)]}`;
};

export const RandomDataGenerator = () => {
    // Function to generate random user data
        const randomData = Array.from({ length: 5 }, () => ({
            name: `${getRandomString(5)} ${getRandomString(7)}`,
            phone: getRandomPhoneNumber(),
            email: getRandomEmail()
        }));
        return randomData
}


export const handleChanges=(name,value,state)=>{
    state(element => ({
        ...element, [name]: value
    }))
}