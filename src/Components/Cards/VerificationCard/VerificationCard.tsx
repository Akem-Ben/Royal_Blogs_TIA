import {Card} from "react-bootstrap";
import okay from "../../../assets/body/okay2.png";
import { useNavigate, useParams } from "react-router-dom";
import { showErrorToast } from "../../../utilities/toastifySetup";
import { useEffect, useState } from "react";
import { verifyUser } from "../../../axiosFolder/axiosFunctions/userAxios/userAxios";

function VerificationCard() {

    const [seconds, setSeconds] = useState(5);

    const navigate = useNavigate()

    const {token} = useParams()

    const verifyUserAccount = async()=>{
        try{

            const data:any = await verifyUser(token)

            if(data.status !== 200){
                showErrorToast(data.data.message)
                return setTimeout(()=>{
                    navigate('/login')
                }, 10000)
               
            }

            return setTimeout(()=>{
                navigate('/login')
            }, 5000)
        
        }catch (error) {
            console.log(error)
          } finally {
            
          }
    }

    useEffect(()=>{
        verifyUserAccount();
        
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [])

  return (
    <div
      style={{
        height: "650px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          backgroundColor: "#242535",
          width: "50rem",
          height: "35rem",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "300px" }}>
          <Card.Img src={okay} />
        </div>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Card.Title style={{ color: "white" }}>
              Account Verified Successfully
            </Card.Title>
            <Card.Text style={{ color: "#97989F" }}>
              Redirecting to Login in <span style={{color: 'green'}}>{seconds}s</span>...
              If it does not redirect, click <span onClick={() => navigate('/login')} style={{color: "red"}}>here</span> to proceed to login
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VerificationCard;
