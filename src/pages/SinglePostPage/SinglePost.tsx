import React, { useState } from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button, Card } from "react-bootstrap";
import { convertISOtoDate } from "../../helper functions/helpers";
import user from "../../assets/header/hero/user.png";
import postImage from "../../assets/body/post.png";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import './singlepost.css'

export const SinglePost = () => {

    const loggedInUser:any = localStorage.getItem('user')

    const mainUser = JSON.parse(loggedInUser)

    const [loading, setLoading] = useState(false)

    const [viewComments, setViewComments] = useState(false)

    const seeComments = () => {
        console.log('how far?')
        setViewComments(!viewComments)
    }

  return (
    <>
      <Navigation />
      <div style={{ marginRight: "15rem", marginLeft: "15rem" }}>
        <Card.Text
          style={{
            backgroundColor: "#4B6BFB",
            fontSize: "11px",
            borderRadius: "5px",
            padding: "5px",
            color: "white",
            width: "4.5rem",
            marginTop: "100px",
          }}
        >
          Technology
        </Card.Text>
        <h1
          style={{
            color: "white",
            marginTop: "10px",
            fontFamily: "sans-serif",
            fontSize: "50px",
          }}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div
          style={{
            fontSize: "10px",
            color: "gray",
            width: "25%",
            marginTop: "1em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "150px", gap: "5px" }}>
            <div style={{ width: "2em" }}>
              <Card.Img src={user} width="1px" height="2px" />
            </div>
            <div>Jason Francisco</div>
          </div>
          <div>{convertISOtoDate(new Date())}</div>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", borderRadius: "10px" }}>
            <img
              src={postImage}
              width="100%"
              alt="blog picture"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              color: "#A6A6AC",
              fontFamily: "Inter",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            mollis aliquam ut porttitor leo a diam sollicitudin. Ultrices
            sagittis orci a scelerisque. Dictumst vestibulum rhoncus est
            pellentesque. Congue eu consequat ac felis. Massa placerat duis
            ultricies lacus sed. Adipiscing enim eu turpis egestas pretium
            aenean pharetra. Tempor nec feugiat nisl pretium fusce. Ullamcorper
            a lacus vestibulum sed. Lectus sit amet est placerat in. Pretium
            fusce id velit ut tortor. Cras adipiscing enim eu turpis egestas
            pretium aenean pharetra magna. Quis blandit turpis cursus in hac
            habitasse. Natoque penatibus et magnis dis parturient montes. In
            vitae turpis massa sed. Ultrices in iaculis nunc sed augue. Quisque
            sagittis purus sit amet. Amet venenatis urna cursus eget nunc
            scelerisque. Eleifend quam adipiscing vitae proin sagittis. Cursus
            mattis molestie a iaculis at erat pellentesque. Praesent tristique
            magna sit amet purus gravida. Eu scelerisque felis imperdiet proin
            fermentum leo vel orci porta. Cursus mattis molestie a iaculis at.
            Habitasse platea dictumst quisque sagittis. Lacus suspendisse
            faucibus interdum posuere lorem ipsum dolor. Pellentesque elit eget
            gravida cum sociis natoque penatibus et. Dolor magna eget est lorem
            ipsum dolor sit amet. Morbi tincidunt augue interdum velit euismod
            in. Ut diam quam nulla porttitor massa. Dui faucibus in ornare quam
            viverra orci. Tincidunt ornare massa eget egestas purus viverra
            accumsan. Adipiscing elit ut aliquam purus sit. Eu facilisis sed
            odio morbi quis commodo odio aenean sed. Accumsan tortor posuere ac
            ut consequat. Non quam lacus suspendisse faucibus interdum posuere
            lorem ipsum dolor. Elementum nibh tellus molestie nunc non blandit
            massa. Praesent elementum facilisis leo vel. Interdum velit laoreet
            id donec ultrices tincidunt arcu non. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit. Magna eget est lorem
            ipsum dolor sit amet. At lectus urna duis convallis convallis tellus
            id interdum. Mollis nunc sed id semper risus in hendrerit gravida.
            Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
            Arcu non odio euismod lacinia at. Ultricies integer quis auctor elit
            sed vulputate mi sit. Tellus orci ac auctor augue mauris augue neque
            gravida in. Aliquam etiam erat velit scelerisque. Eget dolor morbi
            non arcu risus quis. Volutpat maecenas volutpat blandit aliquam
            etiam erat velit scelerisque. Sed tempus urna et pharetra pharetra
            massa massa. Nullam non nisi est sit amet facilisis magna etiam.
            Pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus. Ut tellus elementum sagittis vitae et. Viverra nibh cras
            pulvinar mattis nunc sed blandit libero volutpat. Luctus venenatis
            lectus magna fringilla. Morbi tempus iaculis urna id volutpat.
            Turpis in eu mi bibendum neque. Elementum tempus egestas sed sed
            risus pretium. Egestas egestas fringilla phasellus faucibus
            scelerisque. Egestas egestas fringilla phasellus faucibus
            scelerisque. Eget egestas purus viverra accumsan in nisl nisi. Quam
            viverra orci sagittis eu volutpat odio facilisis mauris. In arcu
            cursus euismod quis viverra nibh cras. Tortor vitae purus faucibus
            ornare suspendisse sed nisi. Congue quisque egestas diam in arcu. In
            cursus turpis massa tincidunt dui ut. Volutpat sed cras ornare arcu
            dui vivamus arcu felis bibendum. Tempus iaculis urna id volutpat
            lacus laoreet non curabitur. Sit amet dictum sit amet justo. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt. Enim blandit
            volutpat maecenas volutpat blandit aliquam. Orci porta non pulvinar
            neque laoreet suspendisse interdum consectetur. Pharetra sit amet
            aliquam id diam maecenas ultricies mi. Turpis egestas sed tempus
            urna et pharetra pharetra massa massa. At urna condimentum mattis
            pellentesque id nibh tortor. Et leo duis ut diam. Faucibus ornare
            suspendisse sed nisi lacus. Tincidunt ornare massa eget egestas
            purus viverra accumsan. Turpis egestas maecenas pharetra convallis
            posuere morbi leo urna molestie. Nisl nisi scelerisque eu ultrices
            vitae auctor eu augue ut. Integer feugiat scelerisque varius morbi
            enim nunc. Orci phasellus egestas tellus rutrum. Diam in arcu cursus
            euismod quis viverra nibh cras. Elit ullamcorper dignissim cras
            tincidunt lobortis feugiat vivamus at augue. Felis donec et odio
            pellentesque diam. Turpis egestas pretium aenean pharetra magna ac
            placerat. Euismod elementum nisi quis eleifend quam adipiscing
            vitae. Ante in nibh mauris cursus mattis. Lacus laoreet non
            curabitur gravida. Quis varius quam quisque id. Interdum varius sit
            amet mattis vulputate enim nulla aliquet porttitor. Vitae congue
            mauris rhoncus aenean vel elit. Quam id leo in vitae turpis massa
            sed. Nullam vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus. Molestie nunc non blandit massa enim nec dui nunc mattis.
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Tincidunt id aliquet risus feugiat. Lectus mauris ultrices eros in
            cursus turpis massa tincidunt dui. Blandit libero volutpat sed cras
            ornare arcu dui vivamus arcu. Etiam dignissim diam quis enim. Cras
            sed felis eget velit aliquet sagittis. Enim sit amet venenatis urna
            cursus eget. Nullam non nisi est sit amet. Nam aliquam sem et
            tortor. Nunc sed velit dignissim sodales ut eu sem. Sed velit
            dignissim sodales ut eu sem integer vitae. Orci ac auctor augue
            mauris augue neque gravida. Neque vitae tempus quam pellentesque nec
            nam. Laoreet sit amet cursus sit. Ullamcorper malesuada proin libero
            nunc consequat interdum varius. Viverra tellus in hac habitasse
            platea. Eget aliquet nibh praesent tristique magna sit amet purus.
            Facilisis leo vel fringilla est ullamcorper eget nulla. Faucibus in
            ornare quam viverra orci. Magnis dis parturient montes nascetur
            ridiculus mus mauris. Adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus urna neque. Tempus quam pellentesque nec nam aliquam.
            Tempor nec feugiat nisl pretium fusce. Egestas quis ipsum
            suspendisse ultrices gravida dictum. Ultrices mi tempus imperdiet
            nulla malesuada pellentesque elit eget. Et pharetra pharetra massa
            massa ultricies mi quis hendrerit dolor. Lectus vestibulum mattis
            ullamcorper velit sed ullamcorper morbi. Morbi tincidunt ornare
            massa eget egestas purus viverra accumsan. Arcu ac tortor dignissim
            convallis aenean et tortor at risus. Enim sit amet venenatis urna.
            Justo laoreet sit amet cursus sit amet dictum sit amet. Nunc non
            blandit massa enim. Vel pretium lectus quam id leo.
          </div>
        </div>
      </div>
      <div style={{ marginTop: '50px', marginRight: "15rem", marginLeft: "15rem"}}>
        {viewComments ? (
            <div>
                <div className='show_comments_link' onClick={seeComments}>Hide Comments</div>
                <div style={{overflowY: 'scroll', marginTop: '20px', backgroundColor: 'gray', height: '300px', padding: '20px', borderRadius: '10px'}}>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                </div>
            </div>
        ):(
            <div className='show_comments_link' onClick={seeComments}>Show Comments</div>
        )}
      </div>

      {mainUser ? (
      <form style={{ marginRight: "15rem", marginLeft: "15rem", marginTop: '20px' }}>
        <textarea placeholder="Add Comment" style={{backgroundColor: 'gray', padding: '10px', width: '100%', height: '100px', borderRadius: '10px', fontWeight: '400'}} required/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type='submit' style={{width: '20%', marginTop: '20px'}}>{loading ? 'Loading...' : 'Add Comment'}</Button>
        </div>
      </form>
      ):(<div style={{ marginRight: "15rem", marginLeft: "15rem", marginTop: '20px', color: "#A6A6AC", fontFamily: 'sans-serif', fontWeight: '600' }}><em>Signin to make a comment</em></div>)}
      <div
        style={{
          display: "flex",
          zIndex: 1000,
          right: 20,
          top: "50%",
          position: "fixed",
          cursor: "pointer",
          width: '100px',
          height: '100px',
          justifyContent: 'space-between',
          marginRight: '10px',
        }}
      >
        <div>
        <AiOutlineLike style={{ width: "30px", height: "30px", color: "white" }} />
        <p style={{color: 'white'}}>100</p>
        </div>
        <div>
        <AiOutlineDislike style={{ width: "30px", height: "30px", color: "white" }} />
        <p style={{color: 'white'}}>100</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
