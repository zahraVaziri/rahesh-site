import './Main.css';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import ProductList from '../../pages/product/ProductList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductServise } from '../../pages/product/ProductServise';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { useEffect, useState } from 'react';
import Header from '../header/Header';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);



export const Card = ({img,name,text}) => {
    return(
        <div className="col-md-6 Service-box pt-5" style={{textAlign:'center'}} >
            <div>{img}</div>
            <h3>{name} </h3>
            <p>{text}</p>
        </div>
    )
}
const author =[
    {
      img:<i class="fas fa-tasks"></i> ,
      name:'تدوین سند سیاست گذاری',
      text:'گروه پژوهشی رهش به نهادها و مؤسسات کمک می کند تا خواسته‌ها و اهدافشان مشخص‌تر و عینی‌تر شود، مخاطبان‌شان را بهتر بشناسند و به لحاظ رسانه‌ای بدانند دقیقاً چه چیزی را باید دنبال کنند.'
    },
    {
      img:<i class="fas fa-search"></i> ,
      name:'پژوهش، سوژه یابی و ایده پردازی',
      text:'اصلی‌ترین چالش‌ برنامه‌سازان و تولیدکنندگان محتوای فرهنگی، پیدا کردن سوژه‌ی مناسب است و اینکه چگونه از بین سوژه‌های متعدد، موضوعی پیدا کنند که به روز، جذاب، فراگیر و مخاطب‌پسند باشد؟'
    },
    {
      img:<i class="fas fa-address-card"></i> ,
      name:'افکارسنجی مخاطبان',
      text:'افکارسنجی روشی است پژوهشی در جهت خلق اثری که تکراری نباشد و خلاقیت آن فراگیر و فرافهم شود.'
    },
    {
      img:<i class="fas fa-chart-pie"></i> ,
      name:'تحقیقات بازار',
      text:'تحقیقات بازار برای هر کسب و کار یا محصول ضروری است تا استراتژی های مارکتینگ مشخص و بهترین تصمیمات اتخاذ شود. پس بسیار مهم است که تحقیقات بازار طی پژوهش هایی علمی و قابل اطمینان انجام شود.'
    },

];



const Main = () => {

    const products = ProductServise.getProducts()

    const intialValues = {name: "" ,time: "" ,text: "" , email: "", phone: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

    const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "فیلد خالی است";
    } else if (!regex.test(values.email)) {
      errors.email = "ایمیل کامل نیست";
    }

    if (!values.phone) {
      errors.phone = "فیلد خالی است";
    } else if (values.phone.length < 11) {
      errors.phone = "شماره کمتر از 11 رقم است";
    }else if ( values.phone[0] != 0 && values.phone[1] != 9){
      errors.phone = 'شماره درست نیست'  
    }

     if (!values.name) {
      errors.name = "فیلد خالی است";
    } 

     if (!values.text) {
      errors.text = "فیلد خالی است";
    } 

     if (!values.time) {
      errors.time = "فیلد خالی است";
    } 

    return errors;
  };

     useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

    return (
        <div>
            <Header/>
            <div className="container pt-5">
                <div>
                    <h2 className={'Services-title'} > خدمات و سرویس ها </h2>
                </div>
                <div style={{margin:'3rem 0'}}>
                    <div className="row ">
                        {author.map(item =>
                            <Card img={item.img} name={item.name} text={item.text}/>     
                        )} 
                    </div>
                </div>
            </div>

            <div className={'form-home-page py-4'} >
                {Object.keys(formErrors).length === 0 && isSubmitting && (
                    <span className="success-msg">فرم به درستی ارسال شد</span>
                )}
                <div className="container" id={'forms'}>
                    <form className="needs-validation py-5"  onSubmit={handleSubmit} noValidate>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">نام (شخص یا سازمان)<span className={'star-form'}>*</span></label>
                                
                                <input type="text" name="name" id="name" class="form-control" value={formValues.name} onChange={handleChange} className={formErrors.phone && "input-error"}/>
                                 {formErrors.name && (
                                    <span className="error">{formErrors.name}</span>
                                )}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">زمان انجام سفارش<span className={'star-form'}>*</span></label>
                                
                                <input type="text" name="time" id="time" class="form-control"  value={formValues.time} onChange={handleChange} className={formErrors.phone && "input-error"} />
                                {formErrors.time && (
                                    <span className="error">{formErrors.time}</span>
                                )}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">شماره موبایل<span className={'star-form'}>*</span></label>
                                
                                <input type="text" name="phone" id="phone" pattern='0[0-9]*' maxLength={11}  class="form-control"  value={formValues.phone} onChange={handleChange} className={formErrors.phone && "input-error"}/>
                                 {formErrors.phone && (
                                    <span className="error">{formErrors.phone}</span>
                                )}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">ایمیل<span className={'star-form'}>*</span></label>
                                <input type="email" name="email" id="email" class="form-control" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"}/>
                                 {formErrors.email && (
                                    <span className="error">{formErrors.email}</span>
                                )}
                            </div>
                            <div class="form-group col-12">
                                <label for="inputPassword4">توضیح سفارش<span className={'star-form'}>*</span></label>
                                
                                <textarea class="form-control" name="text" id="text" rows="5" required value={formValues.text} onChange={handleChange} className={formErrors.text && "input-error"}></textarea>
                                 {formErrors.text && (
                                    <span className="error">{formErrors.text}</span>
                                )}    
                            </div>
                            <div className={'col-12 parent-btn-form'}>    
                                <button type="submit" class="btn btn-outline button-form ">ارسال</button>
                            </div>
                        </div>
                    </form>
                </div>            
            </div>
            <div className="container pt-5">
                <div>
                    <h2 className={'Services-title'} > وبلاگ </h2>

                    {/* <Swiper slidesPerView={1} spaceBetween={5} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        
                        }} breakpoints={{
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 4,
                            "spaceBetween": 50
                        }
                        }} className="mySwiper py-5"> */}
                        
                            {/* <div class="card">
                                <img src="https://raheshgroup.com/wp-content/uploads/2021/06/oman4.jpg" class="card-img-top" alt="..." width={'100%'}/>
                                <div class="card-body">
                                    <a href="https://raheshgroup.com/86/" title="فضای سایبری؛ آسیب ها و مخاطرات" tabindex="0">
                                        
                                            <HTMLEllipsis
                                                unsafeHTML='دیپلماسی اقتصادی و توسعه روابط با عمان '
                                                maxLine='2'
                                                ellipsis='...'
                                                basedOn='letters'
                                                component='h4'
                                            />
                                            <LinesEllipsis
                                                text='دیپلماسی اقتصادی و توسعه روابط با عمان '
                                                maxLine='2'
                                                ellipsis='...'
                                                basedOn='letters'
                                                component='h4'
                                            />
                                        
                                    </a>
                                    <span class="cat-nb">پژوهش</span>
                                    <span class="date-nb">02 ژوئن 2021</span>
                                    <p class="line3-ell">
                                        <HTMLEllipsis
                                            unsafeHTML=' چکیده امروزه، تجارت بین الملل به عنوان یکی از مهم ترین عوامل توسعه و رشد اقتصادی کشورها از طریق افزایش فرصت های تجاری و سرمایه گذاری محسوب می شود. پیوستن به زنجیره ارزش جهانی و توسعه صادرات در کشورهای در حال توسعه زمینه بهبود رقابت پذیری را در این کشورها فراهم می کند و افزایش ارزش افزوده محصولات، سرمایه گذاری در تحقیق وتوسعه، سرمایه گذاری...' 
                                            maxLine='5'
                                            ellipsis='...'
                                            basedOn='letters'
                                        />
                                    </p>
                                </div>
                            </div> */}
                            <ProductList products={products}/>
                       
                        {/* <SwiperSlide>
                            <div class="card">
                                <img src="https://raheshgroup.com/wp-content/uploads/2021/06/cyber.jpeg" class="card-img-top" alt="..." width={'100%'}/>
                                <div class="card-body">
                                    <a href="https://raheshgroup.com/86/" title="فضای سایبری؛ آسیب ها و مخاطرات" tabindex="0">
                                        
                                            <HTMLEllipsis
                                                unsafeHTML='فضای سایبری آسیب هاو مخاطرات'
                                                maxLine='2'
                                                ellipsis='...'
                                                basedOn='letters'
                                                component='h4'
                                            />
                                        
                                    </a>
                                    <span class="cat-nb">پژوهش</span>
                                    <span class="date-nb">02 ژوئن 2021</span>
                                    <p class="line3-ell">
                                        <HTMLEllipsis
                                            unsafeHTML=' چکیده امروزه، تجارت بین الملل به عنوان یکی از مهم ترین عوامل توسعه و رشد اقتصادی کشورها از طریق افزایش فرصت های تجاری و سرمایه گذاری محسوب می شود. پیوستن به زنجیره ارزش جهانی و توسعه صادرات در کشورهای در حال توسعه زمینه بهبود رقابت پذیری را در این کشورها فراهم می کند و افزایش ارزش افزوده محصولات، سرمایه گذاری در تحقیق وتوسعه، سرمایه گذاری...' 
                                            maxLine='5'
                                            ellipsis='...'
                                            basedOn='letters'
                                        />
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src="https://raheshgroup.com/wp-content/uploads/2021/06/hormoz1.jpg" class="card-img-top" alt="..." width={'100%'}/>
                                <div class="card-body">
                                    <a href="https://raheshgroup.com/86/" title="فضای سایبری؛ آسیب ها و مخاطرات" tabindex="0">
                                        
                                            <HTMLEllipsis
                                                unsafeHTML='بررسی موقعیت استراتژیک تنگه هرمز و نقش آن در امنیت ملی جمهوری اسلامی ایران '
                                                maxLine='2'
                                                ellipsis='...'
                                                basedOn='letters'
                                                component='h4'
                                            />
                                        
                                    </a>
                                    <span class="cat-nb">پژوهش</span>
                                    <span class="date-nb">02 ژوئن 2021</span>
                                    <p class="line3-ell">
                                        <HTMLEllipsis
                                            unsafeHTML=' چکیده امروزه، تجارت بین الملل به عنوان یکی از مهم ترین عوامل توسعه و رشد اقتصادی کشورها از طریق افزایش فرصت های تجاری و سرمایه گذاری محسوب می شود. پیوستن به زنجیره ارزش جهانی و توسعه صادرات در کشورهای در حال توسعه زمینه بهبود رقابت پذیری را در این کشورها فراهم می کند و افزایش ارزش افزوده محصولات، سرمایه گذاری در تحقیق وتوسعه، سرمایه گذاری...' 
                                            maxLine='5'
                                            ellipsis='...'
                                            basedOn='letters'
                                        />
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src="	https://raheshgroup.com/wp-content/uploads/2021/06/enegyy-1.jpg" class="card-img-top" alt="..." width={'100%'}/>
                                <div class="card-body">
                                    <a href="https://raheshgroup.com/86/" title="فضای سایبری؛ آسیب ها و مخاطرات" tabindex="0">
                                        
                                        <HTMLEllipsis
                                        text='آینده پژوهی بازار انرژی در جهان'
                                            maxLine='1'
                                            ellipsis='...'
                                            basedOn='letters'
                                            component='h4'
                                            
                                        />
                                        
                                    </a>
                                    <span class="cat-nb">پژوهش</span>
                                    <span class="date-nb">02 ژوئن 2021</span>
                                    <p class="line3-ell">
                                        <HTMLEllipsis
                                            unsafeHTML=' چکیده امروزه، تجارت بین الملل به عنوان یکی از مهم ترین عوامل توسعه و رشد اقتصادی کشورها از طریق افزایش فرصت های تجاری و سرمایه گذاری محسوب می شود. پیوستن به زنجیره ارزش جهانی و توسعه صادرات در کشورهای در حال توسعه زمینه بهبود رقابت پذیری را در این کشورها فراهم می کند و افزایش ارزش افزوده محصولات، سرمایه گذاری در تحقیق وتوسعه، سرمایه گذاری...' 
                                            maxLine='5'
                                            ellipsis='...'
                                            basedOn='letters'
                                        />
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    {/* </Swiper> */}
                </div>
            </div>
        </div>
    );
}

export default Main;
