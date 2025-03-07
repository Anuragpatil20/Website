import React from 'react'

function About() {
  return (
    <div className='bg-gradient-to-r to-blue-900 min-h-screen flex items-center justify-center p-4'>

   
   
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in  ">
            <div class="flex flex-col md:flex-row bg-[url('https://wallpapercave.com/wp/wp2925429.jpg')] bg-cover bg-no-repeat sm:aspect-video py-20">
                <div class="md:w-1/3 text-center mb-8 md:mb-0 mt-35 " >
                   
                    <h1 class="text-2xl font-bold text-indigo-800 dark:text-white mb-2">Anurag patil</h1>
                    <p class="text-gray-600 dark:text-gray-300">Software Developer</p>
                    
                </div>
                <div class="md:w-2/3 md:pl-8">
                    <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
                    <p class="text-black dark:text-gray-300 mb-6">
                    I am Experienced MERN Stack developer in MongoDB, Express.js, React.js, Node.js, and some Flutter experience.
                    </p>
                    <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Express.js</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SQL</span>
                    </div>
                    <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Contact Information</h2>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-center">
                            <img className='h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900' src='https://cdn-icons-png.flaticon.com/128/16935/16935745.png'/>
                            anuragapatil09@gmail.com
                        </li>
                        <li class="flex items-center">
                        <img className='h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900' src='https://cdn-icons-png.flaticon.com/128/3059/3059502.png'/>
                            +91 9021777284
                        </li>
                        <li class="flex items-center">
                        <img className='h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900' src='https://cdn-icons-png.flaticon.com/128/535/535188.png'/>
                            Rethare harnskah
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        
 
   
    
    </div>
  )
}

export default About