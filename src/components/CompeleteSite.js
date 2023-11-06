import React from 'react';
import AnimatedPages from './AnimatedPages';
import { Link } from 'react-router-dom';
//images
import DR_Gohar from '../assets/images/DR_goharnezhad_photo.jpg'
import aboutUs from '../assets/images/aboutUs.svg'
import microscope from '../assets/images/microscopeBG.png'
import aboutUs2 from '../assets/images/info.svg'

//Style
import styles from './CompleteSite.module.css'

const CompeleteSite = () => {
    return (
        <AnimatedPages>
        <>
            <div className={styles.main_container_of_site}>
        {/* Site title */}
                <header>
                    <img src={microscope} alt='microscope' />
                    <h1>
                        آزمایشگاه تشخیص طبی دکتر گهرنژاد
                    </h1>
                </header>
        {/* Site title_______________ */}
            <main>

        {/* about us */}
                <article className={styles.aboutDR_container}>
                        <figure className={styles.aboutDR_DR_title}>
                            <img src={aboutUs} alt='DRGoharnezhad'/>
                            <figcaption>
                                درباره دکتر گهرنژاد
                            </figcaption>
                        </figure>
                    <article className={styles.aboutDR_DR_container}>
                        <figure>
                            <img src={DR_Gohar} alt='DRGoharnezhad'/>
                            <figcaption>
                                دکتر جمال الدین گهرنژاد
                                دکترای علوم آزمایشگاهی
                                ایشان فارغ التحصیل مقطع دکترای علوم آزمایشگاهی از دانشگاه علوم پزشکی ایران در سال ۱۳۷۸ می باشند.
                                از جمله سوابق اجرایی دکتر گهرنژاد می توان به سمت کارشناس آزمایشگاه میکروبیولوژی رفرانس فارس، کارشناس مسئول آزمایشگاههای مراکز بهداشتی درمانی استان فارس اشاره نمود.
                                از سال ۹۸ ، ایشان بعنوان مسئول فنی بخش کلینیکال آزمایشگاه پیوند مشغول فعالیت می باشند.
                            </figcaption>
                        </figure>
                    </article> 
                </article>
        {/*about DR____________________________________ */}

        {/*about us*/}
                    <article>
                    <figure className={styles.aboutUS_title}>
                            <img src={aboutUs2} alt='aboutLAB'/>
                            <figcaption>
                                درباره آزمایشگاه                            
                            </figcaption>
                    </figure>
                        <figure className={styles.aboutUS_container}>
                            <img src={DR_Gohar}/>
                            <figcaption>
                            ،آزمایشگاه تشخیص طبی دکتر گهر نژاد از سال 1399 آغاز به کار کرده و با بهترین و کاملترین تجهیزات روز آزمایشگاهی و با بهره گیری از بهترین پرسنل آزمایشگاهی استان ، در حال خدمت رسانی به مردم می باشد.آزمایشگاه ما بالطف وعنایت پروردگار متعال ودرجهت کمک به تشخیص صحیح ودقیق بیماری ها ,تحقق اهداف پزشکان محترم ,حفظ وارتقاء سطح سلامت جامعه ,کسب اعتبارملی وبه منظور افزایش سطح رضایتمندی بیماران وپزشکان بابهره گیری ازتجهیزات مدرن وبعضامنحصربه فرد آزمایشگاهی دربخش های پاتولوژی و سیتولوژی بارویکردی بیمار محورپابه عرصه خدمت نهاده است .این آزمایشگاه درنظردارد ضمن انجام آزمایشات عمومی واختصاصی درکوتاهترین زمان , نسبت به انجام آزمایشاتی که نیاز به تحقیقات وسیع تری داشته باشند همکاری مستمر داشته وزمینه رابرای ارائه تجارب علمی وعینی شما فراهم نماید. امیداست که به یاری خداوند متعال ودرپی دریافت پیشنهادات وراهنمایی های ارزنده شما بتوانیم درتشخیص به موقع ودقیق بیماری ها خدمات شایسته ای را ارائه نماییم.
                            </figcaption>
                        </figure>
                    </article>
        {/*about us____________________________________ */}


        {/* our services */}
                <article>
                    خدمات ما:انجام کلیه آزمایشهای عمومی و تخصصی اعم از
                    <ol>
                        <li>چکاپ کامل (قندخون،چربی و ...)</li>
                        <li>بیماری های تیروئید،روماتیسم،حساسیت ویتامین ها</li>
                        <li>کم خونی</li>
                        <li>انجام آزمایش های هورمونی</li>
                        <li>دیابت و بیماری های کبدی</li>
                        <li>آزمایش های کلیوی</li>
                    </ol>
                </article>
        {/* our services _________________________________*/}

        {/* download online results*/}
                <article>جوابدهی آنلاین
                    <Link to={'/resultLoginPage'} />
                </article>
        {/* download online results_________________*/}

        {/* our adress*/}
                <article>آدرس ما</article>
        {/* our adress_________________*/}

        {/* working time*/}
                <article>ساعت کاری</article>
        {/* working time*___________________/}

        {/* necessities before exam */}
                <article>آمادگی های قبل از آزمایش</article>
        {/* necessities before exam________________ */}

            </main>
        </div>
        </>
        </AnimatedPages>
    );
};

export default CompeleteSite;