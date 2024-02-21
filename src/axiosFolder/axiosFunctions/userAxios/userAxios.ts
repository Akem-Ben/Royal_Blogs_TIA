import axios from '../../configurations/axiosSetup'

export const registerUser = async (body: any) => {
    try {
      const response = await axios.post("/users/signup", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error:any) {
      return error.response;
    }
  };


  export const loginUser = async(body: any) => {
    try{
      const response = await axios.post('/users/login', body, {
        headers: {
        "Content-Type": "application/json"
        }
      })

      return response
    }catch(error:any){
      return error.response
    }
  }