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
/*
 console.log(data);
{
    "id": 15,
    "username": "kminchelle",
    "email": "kminchelle@qq.com",
    "firstName": "Jeanne",
    "lastName": "Halvorson",
    "gender": "female",
    "image": "https://robohash.org/Jeanne.png?set=set4",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMDU4MDQ3MiwiZXhwIjoxNzEwNTg0MDcyfQ.jvbTEUtUjM55bsaWmYTaAUP8Ulp7c9N5JCyYh2aMNmA"
}
*/
   
    return data
}
