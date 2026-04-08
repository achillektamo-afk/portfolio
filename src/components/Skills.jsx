
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


const Skills = ({darkMode}) => {
    const skills = [
  { name: 'C', icon: C, level: 85, color: 'from-blue-500 to-blue-700' },
  { name: 'C++', icon: Cpp, level: 85, color: 'from-indigo-500 to-indigo-700' },
  { name: 'C#', icon: Csharp, level: 80, color: 'from-purple-500 to-purple-700' },

  { name: 'Java', icon: Java, level: 95, color: 'from-red-500 to-red-700' },
  { name: 'Python', icon: Python, level: 90, color: 'from-yellow-400 to-yellow-600' },

  { name: 'JavaScript', icon: Javascript, level: 90, color: 'from-yellow-300 to-yellow-500' },
  { name: 'TypeScript', icon: Typescript, level: 85, color: 'from-blue-400 to-blue-600' },

  { name: 'PHP', icon: Php, level: 80, color: 'from-indigo-400 to-indigo-600' },
  { name: 'SQL', icon: Sql, level: 85, color: 'from-green-500 to-green-700' },

  { name: 'Node.js', icon: Nodejs, level: 85, color: 'from-green-400 to-green-600' },
  { name: 'React.js', icon: react, level: 90, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Angular', icon: Angular, level: 80, color: 'from-red-600 to-red-800' },
  { name: 'Next.js', icon: Nextjs, level: 85, color: 'from-gray-700 to-black' },

  { name: 'ASP.NET', icon: Asp, level: 75, color: 'from-blue-600 to-blue-800' },

  { name: 'Dart', icon: Dart, level: 75, color: 'from-sky-400 to-sky-600' },

  { name: 'Bash', icon: Bash, level: 80, color: 'from-gray-500 to-gray-700' },

  { name: 'XML', icon: Xml, level: 85, color: 'from-orange-400 to-orange-600' }
]
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
                        My<span
                        style={{
            background:'linear-gradient(to right, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            backgroundClip:'text',
            color:'transparent'
                        }}>Compétences</span> 
                    </h1>
                    <p
                    className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{
                        color: darkMode ? '#d1d5db' : '#4b5563'
                    }}>Un ensemble de compétences variées en développement, 
                        allant des langages bas niveau aux frameworks modernes 
                        pour créer des applications complètes et performantes.</p>
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
                                    <span 
                                    className='font-medium'
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}> Maitrise

                                    </span>
                                    <span style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'
                                    }}
                                    className='font-bold'>
                                        
                                        {skill.level}%

                                    </span>

                                </div>
                                <div
                                className='w-full rounded-full h-3 overflow-hidden'
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                }}>
                                    <div
                                    className={`h-full rounded-full bg-linear-to-r
                                    ${skill.color} transition-all duration-1000 
                                    ease-out`}
                                    style={{width: `${skill.level}%`}}>

                                    </div>
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

                </div>
            </div>
        </div>

    </section>
  );
};

export default Skills