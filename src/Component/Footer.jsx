import React from 'react'

function Footer() {
  return (
    <div>
    
    

    <footer class="w-full bg-gray-900 mt-2">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div class="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
             
            <ul class="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <h1 className='text-yellow-500 font-bold '>Quik links</h1>
                <li ><a href="/contact"  class="text-white hover:text-gray-400 hover:underline">Contact</a></li>
                <li class="sm:my-0 my-2" ><a href="/project"  class="text-white hover:text-gray-400 hover:underline">Project</a></li>
                <li  class="sm:my-0 my-2"><a href="/about"  class="text-white hover:text-gray-400 ho">About_us</a></li>
                
            </ul>
            <div class="flex  space-x-4 sm:justify-center  ">
                <a href="https://www.instagram.com/"  class="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                 <img src='https://cdn-icons-png.flaticon.com/128/15707/15707749.png'/>
                </a>
                <a href="https://x.com/"  class="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                   <img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png'/>
                </a>
                <a href="https://www.facebook.com/"  class="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                    <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>
                </a>
                <a href="https://www.youtube.com/"  class="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                    <img src='https://cdn-icons-png.flaticon.com/128/3670/3670209.png'/>
                </a>
            </div>
        </div>
       
        <div class="py-7 border-t border-gray-700">
            <div class="flex items-center justify-center">
               
            </div>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Footer