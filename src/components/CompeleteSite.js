import React from 'react';
import AnimatedPages from './AnimatedPages';
import { Link } from 'react-router-dom';
//images
import DR_Gohar from '../assets/images/DR_goharnezhad_photo.jpg'
import aboutUs from '../assets/images/aboutUs.svg'
import heartInHand from '../assets/images/heart in hand.png'
import aboutUs2 from '../assets/images/info.svg'
import services from '../assets/images/services.svg'
import necessities from '../assets/images/necessitiesBefore.svg'
import location from '../assets/images/location.svg'
import openingTime from '../assets/images/openingTime.svg'
import contactUs from '../assets/images/contactUs.svg'
import document from '../assets/images/document.svg'
//Style
import styles from './CompleteSite.module.css'

const CompeleteSite = () => {
    return (
        <AnimatedPages>
        <>
            <div className={styles.main_container_of_site}>
        {/* Site title */}
                <header>
                    <img src={heartInHand} alt='microscope' />
                    <h1>
                        ما هیچگاه فراموش نمی کنیم که<br/> هر نمونه در آزمایشگاه<br/> به مثابه یک زندگی<br/> در دستان ماست....
                    </h1>
                </header>
        {/* Site title_______________ */}
           
            <main>
        {/* about DR */}
                <article className={styles.aboutDR_container}>
                        <figure className={styles.aboutDR_title}>
                            <img src={aboutUs} alt='DRGoharnezhad'/>
                            <figcaption>
                                درباره دکتر گهرنژاد
                            </figcaption>
                        </figure>
                    <article className={styles.aboutDR_explain}>
                        <figure>
                            <img src={DR_Gohar} alt='DRGoharnezhad'/>
                            <figcaption>
                                دکتر جمال الدین گهرنژاد<br/>
                                دکترای علوم آزمایشگاهی<br/>
                                ایشان فارغ التحصیل مقطع دکترای علوم آزمایشگاهی از دانشگاه علوم پزشکی ایران در سال ۱۳۷۸ می باشند.
                                از جمله سوابق اجرایی دکتر گهرنژاد می توان به سمت کارشناس آزمایشگاه میکروبیولوژی رفرانس فارس، کارشناس مسئول آزمایشگاههای مراکز بهداشتی درمانی استان فارس اشاره نمود.
                                از سال ۹۸ ، ایشان بعنوان مسئول فنی بخش کلینیکال آزمایشگاه پیوند مشغول فعالیت می باشند.
                            </figcaption>
                        </figure>
                    </article> 
                </article>
        {/*about DR____________________________________ */}

        {/*about us*/}
                <article className={styles.aboutUS_container}>
                    <figure className={styles.aboutUS_title}>
                            <img src={aboutUs2} alt='aboutLAB'/>
                            <figcaption>
                                درباره آزمایشگاه                            
                            </figcaption>
                    </figure>
                        <figure className={styles.aboutUS_explain} >
                            <figcaption>
                            آزمایشگاه تشخیص طبی دکتر گهر نژاد از سال 1399 آغاز به کار کرده و با بهترین و کاملترین تجهیزات روز آزمایشگاهی و با بهره گیری از بهترین پرسنل آزمایشگاهی استان ، در حال خدمت رسانی به مردم می باشد.آزمایشگاه ما بالطف وعنایت پروردگار متعال ودرجهت کمک به تشخیص صحیح ودقیق بیماری ها ,تحقق اهداف پزشکان محترم ,حفظ وارتقاء سطح سلامت جامعه ,کسب اعتبارملی وبه منظور افزایش سطح رضایتمندی بیماران وپزشکان بابهره گیری ازتجهیزات مدرن وبعضامنحصربه فرد آزمایشگاهی دربخش های پاتولوژی و سیتولوژی بارویکردی بیمار محورپابه عرصه خدمت نهاده است .این آزمایشگاه درنظردارد ضمن انجام آزمایشات عمومی واختصاصی درکوتاهترین زمان , نسبت به انجام آزمایشاتی که نیاز به تحقیقات وسیع تری داشته باشند همکاری مستمر داشته وزمینه رابرای ارائه تجارب علمی وعینی شما فراهم نماید. امیداست که به یاری خداوند متعال ودرپی دریافت پیشنهادات وراهنمایی های ارزنده شما بتوانیم درتشخیص به موقع ودقیق بیماری ها خدمات شایسته ای را ارائه نماییم.
                            </figcaption>
                        </figure>
                </article>
        {/*about us____________________________________ */}


        {/* our services */}
                <article className={styles.services_container}>
                    <figure className={styles.services_title}>
                                <img src={services} alt='services'/>
                                <figcaption>
                                    خدمات ما                           
                                </figcaption>
                        </figure>
                    <article className={styles.services_explain}>
                        <h3>انجام کلیه آزمایشهای عمومی و تخصصی اعم از :</h3>
                        <ul>
                            <li>چکاپ کامل (قندخون،چربی و ...)</li>
                            <li>بیماری های تیروئید،روماتیسم،حساسیت ویتامین ها</li>
                            <li>کم خونی</li>
                            <li>انجام آزمایش های هورمونی</li>
                            <li>دیابت و بیماری های کبدی</li>
                            <li>آزمایش های کلیوی</li>
                        </ul>
                    </article>
                </article>
        {/* our services _________________________________*/}

        {/* download online results*/}
                <article className={styles.results_container}>
                    <figure className={styles.results_title}>
                                <Link to={'/resultLoginPage'}>
                                <img src={document} alt='results'/>
                                <figcaption>
                                دریافت جواب آنلاین
                                </figcaption>
                                </Link>
                    </figure>
                </article>
        {/* download online results_________________*/}

        {/* necessities before test */}
                <article className={styles.necessities_container}>
                    <figure className={styles.necessities_title}>
                        <img src={necessities} alt='necessities'/>
                        <figcaption>
                            آمادگی های قبل از آزمایش                       
                        </figcaption>
                    </figure>
                <article className={styles.necessities_explain}>
                    <h5>
                    همه آزمایشها نیاز به آمادگی قبلی ندارند اما انجام بیشتر آزمایشها نیازمند رعایت نکاتی است که اگر به خوبی مراعات گردند موجب رسیدن به نتایج درست آزمایشگاهی می شوند. شاید پرسشی که بیش از دیگر سئوالات از سوی بیماران مطرح می شود، مسئله ناشتایی است. بدیهی است که شما باید معنای دقیق ناشتا بودن را بدانید

                        به طور کلی منظور از ناشتایی این است که

                        نباید طی 10 الی 12 ساعت پیش از انجام آزمایش غذا بخورید

                        نباید طی 10 الی 12 ساعت پیش از انجام آزمایش مایعات بنوشید

                        خوردن آب طبق رژیم عادتی هر شخص مانعی ندارد

                        نباید طی 10 الی 12 ساعت قبل از انجام آزمایش آدامس بجوید

                        نباید از شکلات های مختلف، مینت (ترکیبات نعنا دار)، شربت­های سینه یا قرص های نرم کننده گلو استفاده نمایید.

                        داروهایی را که پزشک اجازه قطع مصرف آنها را صادر نکرده، مثل گذشته مصرف نمایید اما هنگام نمونه گیری، پرسنل نمونه گیر را از مصرف آنها آگاه کنید.

                        نکته مهم دیگر آگاه بودن آزمایشگاه از سوابق دارویی و بیماری شماست. درصورتی که بیماری خاصی دارید یا داروی بخصوصی مصرف می کنید حتما  هنگام نمونه گیری، به پرسنل نمونه گیر اطلاع دهید.
                    </h5>
                    <h2>جهت دریافت اطلاعات بیشتر با پرسنل در ارتباط باشید </h2>
                </article>
            </article>
        {/* necessities before test________________ */}
            </main>
            <footer>
            {/* our address*/}
                    <article className={styles.address_container}>
                        <figure className={styles.address_title}>
                            <img src={location} alt='location'/>
                            <figcaption>
                                آدرس آزمایشگاه
                            </figcaption>
                        </figure>
                        <article className={styles.address_explain}>
                            <location>زرقان،کوی پزشکان،آزمایشگاه تشخیص طبی دکتر گهرنژاد</location>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.7705030085313!2d52.72344907626035!3d29.775270014344585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fadf7026412270b%3A0x5b28fa1b55d390f6!2z2KLYstmF2KfbjNi02q_Yp9mHINiv2qnYqtixINqv2YfYsdmG2pjYp9iv!5e0!3m2!1sen!2suk!4v1699390651134!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </article>
                    </article>
            {/* our address_________________*/}

            {/* working time*/}
                    <article className={styles.time_container}>
                        <figure className={styles.time_title}>
                                <img src={openingTime} alt='openingTime'/>
                                <figcaption>
                                    ساعت کاری
                                </figcaption>
                        </figure>
                        <article className={styles.time_explain}>
                            <h3>
                            ساعت کاری: همه روزه (صبح و عصر) به غیر از روز های تعطیل رسمی
                            </h3>
                        </article>
                    </article>
            {/* working time*___________________*/}
            {/* contact us */}
                    <article className={styles.contactUs_container}>
                        <figure className={styles.contactUs_title}>
                                <img src={contactUs} alt='contactUs'/>
                                <figcaption>
                                    ارتباط با ما
                                </figcaption>
                        </figure>
                    <article className={styles.contactUs_explain}>
                        <Link to='tel:07132624876'> تلفن ثابت :07132624876 </Link>
                        <br/>
                        <Link to='tel:09389229202'> شماره واتساپ و موبایل آزمایشگاه :09389229202 </Link>
                        <br/>
                        <Link to='mailto:fargohar@yahoo.com'> آدرس ایمیل : fargohar@yahoo.com</Link>
                        
                    </article>
                    </article>

            {/* contact us___________________*/}
  
        </footer>

        </div>
        </>
        </AnimatedPages>
    );
};

export default CompeleteSite;