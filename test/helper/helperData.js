const testAuthLogin = {
    email : "villa@gmail.com",
    password: "villa123"
  }
  
  const testAuthRegister = {
    name: "JuanPablo",
    age: 21,
    email: "villa@gmail.com",
    password: "villa123"
  }
  
    const testAuthRegisterAdmin = {
      name: "User test",
      age: 20,
      email: "test@test.com",
      role: ["admin"],
      password: "12345678",
    };
  
    const testStorageRegister = {
      url: "http://localhost:3001/file-test.mp3",
      filename: "file-test.mp3"
    };
  
    const testDataTrack = {
      name :"morat",
      album :"A donde vamos",
      cover :"http://ttt.com",
      artist :{
          name :"morat",
          nickname :"morat",
          nationality :"CO"
      },
      duration :{
          start :1,
          end :0
      },
      mediaId :"63106204bb02b743961c96f0"
  };
    
  
    module.exports = {
      testAuthRegister,
      testAuthLogin,
      testAuthRegisterAdmin,
      testStorageRegister,
      testDataTrack
    }