import React from 'react'
import Link from 'next/link';
import Form from './Form';
import Image from 'next/image';
import { Links } from './Links';
export const ContactUs = () => {
  return (
    <div className='mx-auto container'>
        <section id="contact">
        <div className="flex flex-col col-span-2 lg:flex-row justify-start items-start lg:h-screen">
            <div className="w-full flex flex-col justify-start items-start col-span-2">
              <div>
                <h2 className="font-bold text-7xl text-primary">
                  CONTACT US
                </h2>
              </div>
              <div className="py-4 flex gap-4 w-full h-[446px] items-center relative">
                <Form/>
                <img src="/Contact.svg" alt='contact logo' objectFit='contain' className='absolute z-0 lg:w-80 lg:h-80 w-40 h-40 rounded-full right-1 lg:right-10 lg:-bottom-8'/>
              </div>
            </div>
            <div className="w-full h-1/2 lg:h-screen p-4 relative">
            <div className="relative h-full w-full">
            <div><iframe width="100%" height="500" className='rounded-xl' src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=32.11603,76.46898+(Lok%20Mitra%20Kendra%20Hangloh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>
            </div>
          </div>
          <div>
            <Links/>
          </div>
        </section>
    </div>
  )
}
