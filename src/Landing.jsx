
import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing(){
    const navigate=useNavigate()
    function handleregistration(){
        navigate('/rules');
    }
    return(
        <>
    

  <div class="container">
    <h1 className='Registration-Heading'>Player One</h1>
    <p class="intro">Welcome to Player One — your hub for exciting online competitions!</p>

    <div class="details">
      <p className='Registration-Heading'><strong>BGMI Competition — Absolutely FREE to Join!</strong></p>
      <p>This is a friendly, high-energy BGMI solo match — and yes, it's completely free.</p>
    </div>
    <div class="rewards">
      <h2 className='Registration-Heading'>Rewards</h2>
      <ul>
        <li><strong>1st Place:</strong> ₹250</li>
        <li><strong>2nd Place:</strong> ₹150</li>
        <li><strong>3rd to 5th Place:</strong> ₹100 each</li>
      </ul>
      <p class="note">There’s no entry fee. Just skill, fun, and rewards!</p>
    </div>

    <div class="footer">
    <button className='register-button' onClick={handleregistration}>Register</button>
    </div>
  </div>        
        </>
    )
}