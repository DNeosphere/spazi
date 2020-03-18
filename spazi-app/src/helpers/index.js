export const getData = async () => {
    const url = 'https://spazi.rocks/api/users/me';
    const response = await fetch(url);
    let data = await response.json();

    return data;
}


export const  postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return await response.json().catch(err => console.log(err.meessage))
}
