import Navigation from '../../Components/Navbar/Navbar'

export const Profile = () => {

    const user:any = localStorage.getItem("user")

    const mainUser = JSON.parse(user)
  return (
    <>
    <Navigation />
    <div style={{marginTop: '100px', padding: `40px`}}>
        <div style={{width: '150px', borderRadius: '50%'}}>
            <img src={mainUser.profileImage} alt='profile image' width='80%' style={{borderRadius: '50%'}} />
        </div>
    </div>
    </>
  )
}