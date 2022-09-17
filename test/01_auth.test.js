const request  = require("supertest")
const app =  require("../app")
const {usersModel} = require("../models")

const testAuthLogin ={
    
    "email": "hola@test.com",
    "password": "morat123" 
}

const testAuthRegister ={
    "name": "User test",
    "age": 20,
    "email": "hola@test.com",
    "password": "morat123"
}


/**
 *  Se va ejecutar antes de las pruebas
 */
beforeAll( async () =>{
    await usersModel.deleteMany();
})


describe("[AUTH] esta es la prueba de /api/auth", () => {


    test("esto deberia de retornar un 404 el usuario no existe", async () =>{

        const response = await request(app)
        .post('/api/auth/login')
        .send(testAuthLogin)
        expect(response.statusCode).toEqual(404)
    });

    
    test("esto deberia de retornar un 201 creado con exito", async () =>{

        const response = await request(app)
        .post('/api/auth/register')
        .send(testAuthRegister)
        
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("data.token");
        expect(response.body).toHaveProperty("data.user");
    })


    
    test("esto deberia de retornar un 401 password invalido", async () =>{
        const newTestAuthLogin = {...testAuthLogin, password:"22222222"}
        const response = await request(app)
        .post('/api/auth/login')
        .send(newTestAuthLogin)
        expect(response.statusCode).toEqual(401)
    });


    test("esto deberia de retornar un 200 loggin correcto", async () =>{

        const response = await request(app)
        .post('/api/auth/login')
        .send(testAuthLogin)
        expect(response.statusCode).toEqual(200)
    });




})