import './contact.css'
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import {SiGmail} from "react-icons/si"
import {AiFillInstagram} from "react-icons/ai"
import {FaLinkedinIn,FaFacebookF} from "react-icons/fa"
const Contact = () => {
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
                <div className='contact-greet-sub'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit saepe dolores nam consequatur tenetur.</div>
                </div>
                <div className='contact-form'> <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a Message' />
                    <a href="mailto:venkateshsirigineedi32@gmail.com"><button>Send</button></a>
                    </form>
                     </div>
            </div>
        </div>
        <div className='foo-social'>
            <div className='si'>
            <SiGmail className='icon'/>
                <FaLinkedinIn className='icon'/>
                <FaFacebookF className='icon'/>
                <AiFillInstagram className='icon'/>
            </div>
            <div className='sn'>@venkateshsirigineedi</div>

        </div>
        </div>
     );
}
 
export default Contact;