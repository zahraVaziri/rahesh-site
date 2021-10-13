
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'row py-5'}>
                    <div className={'col-md-4 text-center py-2'}>
                        <ul  >
                            <li>
                                <Link className={'text-color'} smooth to="/servis">
                                    خدمات
                                </Link>
                            </li>
                            <li>
                                <Link className={'text-color'} smooth to="/about">
                                    درباره ما
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={'col-md-4 text-center py-2'}>
                        <h6>شبکه های اجتماعی</h6>
                        <div className={'social-icon'}>
                            <a href="https://instagram.com/rahesh.group" title="اینستاگرام"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={'col-md-4 text-center py-2'}>
                        <h6>آدرس و تماس</h6>
                        <p className={'text-color'}>
                            تهران، خیابان ولیعصر، بن بست مهرگان، پلاک 3
                            <br/>
                            ایمیل: Raheshgroup@gmail.com 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={'footer-end'}>
            <div className={'container'}>
                <div className={'row py-5'}>
                    <div class="col-12 text-center">
                        <p class="mb-0">
                        کلیه حقوق و کپی رایت محتوای این سایت متعلق به گروه رهش است و کپی برداری بدون ذکر منبع و درج لینک، پیگرد قانونی دارد.             
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
