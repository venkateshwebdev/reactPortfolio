import './contact.css'
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import {SiGmail} from "react-icons/si"
import {AiFillInstagram} from "react-icons/ai"
import {FaLinkedinIn,FaFacebookF, FaGithub} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Contact = () => {
    const [textbody,setTextBody] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <div className="contact-wrap">
        <div className="contact-container" id='contact'>
            <HeadingUnder name="Contact" />
            <div className='contact-content'>
                <div className='cg'>
                <div className='contact-greet'>Let's Connect!</div>
                <div className='contact-greet-sub'>Build Bridges, Stay in Touch, and Grow Together!</div>
                </div>
                <div className='contact-form'> <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>setTextBody(e.target.value)} type="text" placeholder='Enter a Message' value={textbody} />
                    <button><Link to={`mailto:venkateshsirigineedi32@gmail.com?subject=Mail from our Website?textbody=${textbody}`}>Send</Link></button>
                    </form>
                     </div>
            </div>
        </div>
        <div className='foo-social'>
            <div className='si'>
              <Link to="mailto:venkateshsirigineedi32@gmail.com"><SiGmail className='icon'/></Link>
               <Link to="https://www.linkedin.com/in/venkatesh-sirigineedi-a84078263"><FaLinkedinIn className='icon'/></Link>
                {/* <FaFacebookF className='icon'/> */}
                {/* <AiFillInstagram className='icon'/> */}
                <Link to="https://github.com/venkateshwebdev"><FaGithub className='icon'/></Link>
            </div>
            <div className='sn'>@venkateshsirigineedi</div>

        </div>
        </div>
     );
}
 
export default Contact;