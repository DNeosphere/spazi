export const getData = async () => {
    const url = 'https://spazi.rocks/api/users/me';
    const response = await fetch(url);
    let data = await response.json();

    return data;
}
