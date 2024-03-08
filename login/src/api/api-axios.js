const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 2000,
    // headers: {'X-Custom-Header': 'foobar'}
});
async function loginDummyData() {
    const { data } = await instance.post("/auth/login", {
        username: 'kminchelle',
        password: '0lelplR',
    })
    console.log(data);
    return data
}
