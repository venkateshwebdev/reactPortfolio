import './contact.css'
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
const Contact = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <div className="contact-container" id='contact'>
            <HeadingUnder name="Contact" />
            <div className='contact-content'>
                <div className='contact-greet'>Say Hi !</div>
                <div> <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter a Message' />
                    <a href="mailto:venkateshsirigineedi32@gmail.com"><button>Send</button></a>
                    </form>
                     </div>
            </div>
            {/* <div className='contact-footer'>
                <div>facebook</div>
            </div> */}
        </div>
     );
}
 
export default Contact;