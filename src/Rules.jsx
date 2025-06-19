import { useNavigate } from "react-router-dom"

export default function Rules(){
    const navigate=useNavigate();
    function handlenext(){
        navigate('/register')
    }
    return(
        <>
    

    <div class="container">
    <h1 className='Registration-Heading'>Rules</h1>
    

<h2>RULES & INFO</h2>
  <p><strong>Game Time:</strong> Saturday, 21-06-22 at 9:00 PM</p>
  <p><strong>Join 10 minutes before</strong> the match for smooth access</p>
  <p><strong>Provide your exact In-Game Name and In-Game ID</strong> — this is important for validation</p>
  <p><strong>Double-check your WhatsApp number</strong> — Game Room details will be sent there</p>
  <p><strong>Take a screenshot</strong> at the end of the game and send it to the WhatsApp number from which you got the room code</p>

  <p class="note">Thank you for joining and good luck!</p>

  <button onClick={handlenext} className="register-button">Next</button>
  </div>        
        </>
    )

}