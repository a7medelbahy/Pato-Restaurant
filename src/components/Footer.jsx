import FirstFooter from './FirstFooter';
import './mainCompnents.css';
import SecondFooter from './SecondFooter';
import ThirdFooter from './ThirdFooter';

const Footer = () => {
    return ( 
        <div className='section-padding footer'>
            <div className='container'>
                <div className='row gy-5'>
                    <FirstFooter />
                    <SecondFooter />
                    <ThirdFooter />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;