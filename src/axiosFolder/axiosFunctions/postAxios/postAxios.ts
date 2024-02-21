import axios from '../../configurations/axiosSetup'


export const createPost = async(body:any)=>{
    try{
      const response = await axios.post("/post/create", body,{
        headers: {
            "Content-Type" : "multipart/form-data"
        }
      })
    return response
    }catch(error:any){
      return error.response
    }
  }