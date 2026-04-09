import instagram from '../assets/Instagram.png'
import tiktok from '../assets/Tiktok.png'
import github from '../assets/Github.png'
import youtube from '../assets/Youtube.png'
import CV from '../assets/CV.pdf'
import hero from '../assets/Hero.png'
import { DownloadIcon, Mail } from 'lucide-react'
import { useTranslation } from "react-i18next";


const Hero = ({darkMode}) => {
    const { t } = useTranslation();
    const socialicons =[
        { icon: instagram, alt:'Instagram'},
        { icon: tiktok, alt:'Tiktok'},
        { icon: github, alt:'Github'},
        { icon: youtube, alt:'Youtube'},
        
    ];
    const darkTheme={
        textPrimary:'text-white',
        textSecondary:'text-gray-300',
        buttonsecondary:`text-white border-2 border-orange-500
        hover:bg-orange-600`,
        decorativeCircle:'bg-orange-500 opacity-10',
    };
    const lightTheme={
        textPrimary:'text-gray-900',
        textSecondary:'text-gray-700',
        buttonsecondary:`text-gray-800 border-2 border-orange-500
        hover:bg-orange-500 hover:text-white`,
        decorativeCircle:'bg-orange-400 opacity-20'

    };
    const Theme= darkMode ? darkTheme: lightTheme;
  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-14 flex-col lg:flex-row items-center justify-between 
            lg:mt-14 mt-14'>
                <div className='lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    
                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${Theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                            {t("hero_title")}
                    </h1>
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                        sm:max-w-lg ${Theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-delay='600'>
                            {t("hero_description")}

                    </p>
                    {/* Buttons */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex slex-col sm:flex-row justify-center
                        lg:justify-start gap-3 sm:gap-4'
                        data-aos='fade-up'
                        data-aos-delay='700'>
                            <a href={CV} download className='w-full sm:w-auto'>
                                <button className='w-full sm:w-auto
                inline-flex items-center justify-center text-white
                bg-linear-to-r from-orange-500 to-amber-500 border-0
                py-3 px-6 sm;px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base cm:text-lg font-semibold transition-all
                duration-300 transform'>
                    <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                    {t("download_cv")}

                                </button>
                            </a>
                            <a href='#contact' className='w-full sm:w-auto'>
                                <button className={` w-full sm:w-auto
                inline-flex items-center ${Theme.buttonsecondary} justify-center text-white
                justify-center border-0
                py-3 px-6 sm;px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base cm:text-lg font-semibold transition-all
                duration-300 transform`} >
                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                    {t("contact_me")}

                                </button>

                            </a>

                        </div>
                    </div>
                </div>
                {/* Image */}
                <div
                className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
                lg:mt-0 flex justify-center'
                data-aos='fade-left'
                data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                        <div className='relative overflow-hidden'>
                            <img src={hero} alt="Hero image"
                            className='w-full h-[500px] sm:h-[600px] lg:h-[600px] object-cover transform
                            hover:scale-105 transition-transform duration-500' />

                        </div>
                    </div>
                </div>
            </div>
            <div className={` absolute -top-20 -left-20 w-40 h-40
                sm:w-64 sm:h-64 ${Theme.decorativeCircle} rounded-full
                mix-blend-multiply filter blur-3xl opacity-10
                animate-pulse delay-1000 hidden sm:block`}>

            </div>
        </section>

    </div>
  );
};

export default Hero