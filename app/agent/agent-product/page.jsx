"use client"
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' container'>
      <div className='agent_details'>
        <div className='agent_cover'>
          <Image src={require("../asset/img/cover.jpeg")} className='cover_picture' alt="cover pictures" />
        </div>
        <div className='agent_profile'>
        <Image src={require("../asset/img/profile.png")} className='profile_picture' alt="cover pictures" />
        </div>
      </div> 
      <div className='agent_product_listing flex flex-grow p-6 items-center justify-center flex-wrap gap-y-8 gap-x-8'>
        <div className="flex flex-col shadow-xl lg:w-[26rem] sm:w-full rounded-2xl cart min-h-min: overflow-hidden">
                      <div className="relative image">
                          <a href="#" className="dave">
                              <Image src={require("../asset/img/property-1.jpg")} className="w-full h-full object-cover" alt="image" />
                              <div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
                                  <p>For Rent</p>
                              </div>
                              <div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
                                  <p>Appartment</p>
                              </div>
                          </a>
                      </div>
                      <div className="px-8">
                          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                              <dt className="sr-only">Reviews</dt>
                              <dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                              </dd>
                              <dt className="sr-only">Location</dt>
                              <dd className="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                  <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-fuchsia-400 dark:text-slate-500" aria-hidden="true">
                                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Ogele, Eiyenkorin, Kwara State
                              </dd>
                            </dl>
                          <div className="text-left">
                              <h5 className="text-2xl my-5 font-medium text-fuchsia-700">
                                  $12,345
                              </h5>
                              <a href="#" className="block hover:text-fuchsia-600 text-3xl text-transform: capitalize font-semibold mb-1">
                                  golden estate for sell
                              </a>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis eveniet cumque laudantium ipsum nobis 
                                officia qui unde, optio esse.</p>
                          </div>
                          <div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
                              <h4>Land Space: 10plot.</h4>
                          </div>
                          <div className="my-5 flex gap-2">
                              <button className="bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                                  Add to cart
                              </button>
                              <button className="flex-none flex items-center justify-center w-11 h-9 hover:bg-fuchsia-200 hover:text-white rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                  </svg>
                                </button>
                          </div>
                      </div>
                      
        </div>
        <div className="flex flex-col shadow-xl lg:w-[26rem] sm:w-full rounded-2xl cart min-h-min: overflow-hidden">
                      <div className="relative image">
                          <a href="#" className="dave">
                              <Image src={require("../asset/img/property-1.jpg")} className="w-full h-full object-cover" alt="image" />
                              <div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
                                  <p>For Rent</p>
                              </div>
                              <div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
                                  <p>Appartment</p>
                              </div>
                          </a>
                      </div>
                      <div className="px-8">
                          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                              <dt className="sr-only">Reviews</dt>
                              <dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                              </dd>
                              <dt className="sr-only">Location</dt>
                              <dd className="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                  <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-fuchsia-400 dark:text-slate-500" aria-hidden="true">
                                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Ogele, Eiyenkorin, Kwara State
                              </dd>
                            </dl>
                          <div className="text-left">
                              <h5 className="text-2xl my-5 font-medium text-fuchsia-700">
                                  $12,345
                              </h5>
                              <a href="#" className="block hover:text-fuchsia-600 text-3xl text-transform: capitalize font-semibold mb-1">
                                  golden estate for sell
                              </a>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis eveniet cumque laudantium ipsum nobis 
                                officia qui unde, optio esse.</p>
                          </div>
                          <div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
                              <h4>Land Space: 10plot.</h4>
                          </div>
                          <div className="my-5 flex gap-2">
                              <button className="bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                                  Add to cart
                              </button>
                              <button className="flex-none flex items-center justify-center w-11 h-9 hover:bg-fuchsia-200 hover:text-white rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                  </svg>
                                </button>
                          </div>
                      </div>
                      
        </div>
        <div className="flex flex-col shadow-xl lg:w-[26rem] sm:w-full rounded-2xl cart min-h-min: overflow-hidden">
                      <div className="relative image">
                          <a href="#" className="dave">
                              <Image src={require("../asset/img/property-1.jpg")} className="w-full h-full object-cover" alt="image" />
                              <div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
                                  <p>For Rent</p>
                              </div>
                              <div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
                                  <p>Appartment</p>
                              </div>
                          </a>
                      </div>
                      <div className="px-8">
                          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                              <dt className="sr-only">Reviews</dt>
                              <dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                              </dd>
                              <dt className="sr-only">Location</dt>
                              <dd className="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                  <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-fuchsia-400 dark:text-slate-500" aria-hidden="true">
                                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Ogele, Eiyenkorin, Kwara State
                              </dd>
                            </dl>
                          <div className="text-left">
                              <h5 className="text-2xl my-5 font-medium text-fuchsia-700">
                                  $12,345
                              </h5>
                              <a href="#" className="block hover:text-fuchsia-600 text-3xl text-transform: capitalize font-semibold mb-1">
                                  golden estate for sell
                              </a>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis eveniet cumque laudantium ipsum nobis 
                                officia qui unde, optio esse.</p>
                          </div>
                          <div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
                              <h4>Land Space: 10plot.</h4>
                          </div>
                          <div className="my-5 flex gap-2">
                              <button className="bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                                  Add to cart
                              </button>
                              <button className="flex-none flex items-center justify-center w-11 h-9 hover:bg-fuchsia-200 hover:text-white rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                  </svg>
                                </button>
                          </div>
                      </div>
                      
        </div>
        <div className="flex flex-col shadow-xl lg:w-[26rem] sm:w-full rounded-2xl cart min-h-min: overflow-hidden">
                      <div className="relative image">
                          <a href="#" className="dave">
                              <Image src={require("../asset/img/property-1.jpg")} className="w-full h-full object-cover" alt="image" />
                              <div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
                                  <p>For Rent</p>
                              </div>
                              <div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
                                  <p>Appartment</p>
                              </div>
                          </a>
                      </div>
                      <div className="px-8">
                          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                              <dt className="sr-only">Reviews</dt>
                              <dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                              </dd>
                              <dt className="sr-only">Location</dt>
                              <dd className="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                  <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-fuchsia-400 dark:text-slate-500" aria-hidden="true">
                                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Ogele, Eiyenkorin, Kwara State
                              </dd>
                            </dl>
                          <div className="text-left">
                              <h5 className="text-2xl my-5 font-medium text-fuchsia-700">
                                  $12,345
                              </h5>
                              <a href="#" className="block hover:text-fuchsia-600 text-3xl text-transform: capitalize font-semibold mb-1">
                                  golden estate for sell
                              </a>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis eveniet cumque laudantium ipsum nobis 
                                officia qui unde, optio esse.</p>
                          </div>
                          <div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
                              <h4>Land Space: 10plot.</h4>
                          </div>
                          <div className="my-5 flex gap-2">
                              <button className="bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                                  Add to cart
                              </button>
                              <button className="flex-none flex items-center justify-center w-11 h-9 hover:bg-fuchsia-200 hover:text-white rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                  </svg>
                                </button>
                          </div>
                      </div>
                      
        </div>
      </div>
    </main>
  )
}
