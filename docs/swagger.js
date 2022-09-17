const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition ={
    openapi: "3.0.0",
    info:{
        title:"Documentacion de mi API curso de NODE Rest",
        version:"1.0.0"
    },
    servers:[
        {
            url:"http://localhost:3001/api"
        }
    ],
   components:{
    schemas:{
        authLogin:{
            type:"object",
            required:["email","password"],
            properties:{
                email:{
                    type:"string",
                },
                password:{
                    type:"string",
                },
            },
        },
        authRegister:{
            type:"object",
            required:["email","password","age","name"],
            properties:{
                name:{
                    type:"string",
                },
                age:{
                    type:"integer",
                },
                email:{
                    type:"string",
                },
                password:{
                    type:"string"
                },
            },
        },
        tracks:{
            type:"object",
            required:["name","album"],
            properties:{
                name:{
                    type:"string"
                },
                album:{
                    type:"string"
                },
                cover:{
                    type:"string"
                },
                artist:{
                    type:"object",
                    properties:{
                        name:{
                            type:"string"
                        },
                        nickname:{
                            type:"string"
                        },
                        nationality:{
                            type:"string"
                        }
                    }
                },
                duration:{
                    type:"object",
                    properties:{
                        start:{
                            type:"interger"
                        },
                        end:{
                            type:"interger"
                        },
                    }
                },
                mediaId:{
                    type:"string"
                }
            }
        },
        storage:{
            type:"object",
            properties:{
                url:{
                    type:"string",
                },
                filename:{
                    type:"string",
                },
            },
        },
    },
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer",
        }
    },
   },
};

/**
 * Opciones
 */
const options = {
    
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration