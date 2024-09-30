import React from 'react'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {BsBell} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {HiChevronDown} from 'react-icons/hi'

const homePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-12 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600"/>
        </div>
        <div className="text-xl font-thin">夜航船</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600"/>
          </div>
          <div>
            <div className="w-5 h-5 bg-gray-600 rounded-full" />
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition
              hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit/>
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 w-full h-full border-r border-gray-300 px-24">
          <div className="flex-col flex w-full space-y-4 py-10">
            <div className="flex w-full items-center space-x-4">  
              <label htmlFor="search" className='relative w-full rounded-lg border border-gray-400'>
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input type="text" name="search" id="search" className="rounded-lg w-full py-1 px-4 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300" placeholder='搜一下。。。'/>
              </label>
              <div className="flex items-center w-full justify-end">
                <div>主题:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4}).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-3xl bg-gray-200/50 px-4 py-2"
                      >
                        tag {i}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full justify-between flex items-center border-b border-gray-300 pb-8">
                    <div>
                      Article
                    </div>
                    <div>
                      <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                        <div>Following</div>
                        <div>
                          <HiChevronDown className="text-xl"/>
                        </div>
                      </button>
                    </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8">{
            Array.from({ length: 5}).map((_, i) => (
              <div
                key={i}
                className='group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none'
              >
                <div className='flex w-full items-center space-x-2'>
                  <div className='h-10 w-10 rounded-full bg-gray-400'></div>
                  <div>
                    <p className='font-semibold'>徐晓锋 &#x2022; 22 Dec. 2022</p>
                    <p className='text-sm'>Founder, student & developer</p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className='text-2xl font-bold text-gray-800 group-hover:underline decoration-indigo-600'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <p className='text-sm text-gray-500 break-words'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, possimus sapiente iste, ipsam eius rem laborum dolorum quibusdam incidunt earum, voluptatibus quaerat quos officia. Quis laudantium maxime, accusantium mollitia maiores, enim tempora voluptatibus quod autem ex debitis repudiandae architecto ullam blanditiis illo dignissimos iure eos aliquam quaerat, placeat molestias praesentium nemo eius. Non neque harum quo, laborum autem consequuntur commodi.</p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-xl"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center w-full justify-start">
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 4}).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-gray-200/50 px-5 py-2.5"
                        >
                          tag {i}
                        </div>
                      ))}
                  </div>
                </div>
                </div>
              </div> 
            ))
            }</div>
        </main>
        <aside className="col-span-4 flex h-full w-full flex-col space-y-4 p-6">
          <div>
            <h3>可能感兴趣的人</h3>
            <div className='flex flex-col space-y-4'>
              {
                Array.from({ length: 4}).map((_, i) => (
                  <div
                    key={i}
                    className='flex flex-row items-center space-x-4'
                  >
                    <div className='bg-gray-500 w-10 h-10 rounded-full'>

                    </div>
                    <div>
                      <div className='text-gray-900 font-bold'>Lorem ipsum</div>
                      <div className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, tempore测试.</div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                          Follow
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default homePage