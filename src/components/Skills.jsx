
import C from '../assets/C.jpg'
import Cpp from '../assets/C++.jpg'
import Csharp from '../assets/Csharp.jpg'
import Java from '../assets/Java.jpg'
import Python from '../assets/Python.jpg'
import Javascript from '../assets/Javascript.jpg'
import Typescript from '../assets/Typescript.jpg'
import Php from '../assets/Php.jpg'
import Sql from '../assets/Sql.jpg'
import Nodejs from '../assets/Node.jpg'
import react from '../assets/React.jpg'
import Angular from '../assets/Angular.jpg'
import Nextjs from '../assets/Next.jpg'
import Asp from '../assets/Asp.jpg'
import Dart from '../assets/Dart.jpg'
import Bash from '../assets/Bash.jpg'
import Xml from '../assets/Xml.jpg'
import { useTranslation } from "react-i18next";


const Skills = ({darkMode}) => {
    const { t } = useTranslation();
    const skills = [
  { name: 'C#', icon: Csharp,  color: 'from-purple-500 to-purple-700' },

  { name: 'Java', icon: Java,  color: 'from-red-500 to-red-700' },
  { name: 'Python', icon: Python,  color: 'from-yellow-400 to-yellow-600' },


  { name: 'PHP', icon: Php,  color: 'from-indigo-400 to-indigo-600' },
  { name: 'SQL', icon: Sql,  color: 'from-green-500 to-green-700' },

  { name: 'Node.js', icon: Nodejs,  color: 'from-green-400 to-green-600' },
  { name: 'React.js', icon: react, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Next.js', icon: Nextjs,  color: 'from-gray-700 to-black' },
]
const softSkills = [
  { name: t("soft_adaptability"), icon: '⚡', color: 'from-orange-400 to-orange-600' },
  { name: t("soft_pressure"), icon: '🔥', color: 'from-red-400 to-red-600' },
  { name: t("soft_teamwork"), icon: '🤝', color: 'from-blue-400 to-blue-600' },
  { name: t("soft_problem"), icon: '🧠', color: 'from-purple-400 to-purple-600' },
  { name: t("soft_communication"), icon: '💬', color: 'from-green-400 to-green-600' },
  { name: t("soft_time"), icon: '⏱️', color: 'from-yellow-400 to-yellow-600' },
  { name: t("soft_autonomy"), icon: '🚀', color: 'from-indigo-400 to-indigo-600' },
  { name: t("soft_learning"), icon: '📚', color: 'from-pink-400 to-pink-600' },
];
  return (
    <section 
    id='skills'
    style={{
        backgroundColor: darkMode ? "#111827": "#f9fafb"
    }}
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h1 
                    className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                        {t("skills_title")} <span
                        style={{
            background:'linear-gradient(to right, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            backgroundClip:'text',
            color:'transparent'
                        }}>{t("skills_highlight")}</span> 
                    </h1>
                    <p
                    className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{
                        color: darkMode ? '#d1d5db' : '#4b5563'
                    }}>{t("skills_description")}</p>
                </div>
                <div 
                className='flex flex-wrap -m-4'
                data-aos='fade-up'
                data-aos-delay='200'>
                    {skills.map((skill, index)=>(
                        <div
                        key={index}
                        className='p-4 lg:w-1/4 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300+index*100}`}>
                            <div
                            style={{
                    background: darkMode
                    ?'linear-gradient(to bottom right, #1f2937, #111827)'
                    :'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                    borderColor: darkMode ? '#374151' :'#e5e7eb'
                            }}
                            className='h-full p-6 rounded-2xl border
                            hover:border-orange-500/50 transition-all
                            duration-300 hover:-translate-y-2 group
                            hover:shadow-[0_0_30px_rgb(255, 165,0,0,0.15)]'>
                                <div className='flex items-center mb-6'>
                                    <div 
                                    style={{
                    background: darkMode
                    ?'linear-gradient(to bottom right, #374151, #1f2937)'
                    :'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                            }}
                            className='w-16 h-16 rounded-xl p-3 flex
                            items-center justify-center
                            group-hover:scale-110 transition-transform
                            duration-300'>
                                <img
                                src={skill.icon}
                                alt={skill.name}
                                className='w-full h-full object-contain'/>
                                    </div>
                                    <h3
                                    className='text-2xl font-bold ml-4'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className='mb-2 flex justify-between
                                items-center'>
                                    
                      
                                </div>
                                <div className={`mt-6 pt-4 border-t
                                    ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                    <div
                                    className='h-1 rounded-full opacity-70
                                    group-hover:w-full transition-all duration-500 w-1/3'
                                    style={{
                                        background:'linear-gradient(to right, #f97316, #f59e0b)'
                                    }}>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                    
<div className='mt-20'>
  <div className='text-center mb-20' data-aos='fade-up'>
    <h1
      className='sm:text-4xl text-3xl font-bold title-font mb-4'
      style={{ color: darkMode ? 'white' : '#1f2937' }}
    >
      {t("softskills_title")} <span
        style={{
          background: 'linear-gradient(to right, #f97316, #f59e0b)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >{t("softskills_highlight")}</span>
    </h1>

    <p
      className='text-lg max-w-2xl mx-auto leading-relaxed'
      style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
    >
      {t("softskills_description")}
    </p>
  </div>

  <div
    className='flex flex-wrap -m-4'
    data-aos='fade-up'
    data-aos-delay='200'
  >
    {softSkills.map((skill, index) => (
      <div
        key={index}
        className='p-4 lg:w-1/4 md:w-1/2 w-full'
        data-aos='fade-up'
        data-aos-delay={`${300 + index * 100}`}
      >
        <div
          style={{
            background: darkMode
              ? 'linear-gradient(to bottom right, #1f2937, #111827)'
              : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
            borderColor: darkMode ? '#374151' : '#e5e7eb'
          }}
          className='h-full p-6 rounded-2xl border
          hover:border-orange-500/50 transition-all
          duration-300 hover:-translate-y-2 group
          hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]'
        >
          <div className='flex items-center mb-6'>
            <div
              className='w-16 h-16 rounded-xl flex items-center justify-center text-3xl
              group-hover:scale-110 transition-transform duration-300'
              style={{
                background: darkMode
                  ? '#374151'
                  : '#e5e7eb'
              }}
            >
              {skill.icon}
            </div>

            <h3
              className='text-2xl font-bold ml-4'
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              {skill.name}
            </h3>
          </div>

          <div className={`mt-6 pt-4 border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <div
              className='h-1 rounded-full opacity-70
              group-hover:w-full transition-all duration-500 w-1/3'
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)'
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Skills