import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const MatchCard = ({ matchDetails }) => {

  if (matchDetails?.seriesAdWrapper) {
    return (
      // <div className='py-1'>
      <Link className='m-1 rounded-md hover:bg-[#28bc95] py-1' to='/MatchDetails'
        state={matchDetails?.seriesAdWrapper} >
        {
          matchDetails?.seriesAdWrapper?.seriesName
        }
      </Link>
      // </div>
    )
  }
}

// const MatchList = ({ list }) => {
//   console.log('list is \n', list?.typeMatches)
//   return (
//     <div className='flex flex-row justify-between'>
// {
//   list?.typeMatches?.map((item) => (
//     <div key={item.matchType} >
//       <p >
//       {item.matchType}
//       </p>
//       {
//         item?.seriesMatches?.map((matchDetails)=>(
//           <MatchCard matchDetails={matchDetails}  />
//         ))
//       }
//     </div>
//   ))
// }

//     </div>
//   )
// }

const MatchList = ({ list }) => {
  return (
    <div className='flex flex-row justify-evenly items-center pt-4'>
      {
        list?.typeMatches?.map((item) => (
          <Menu as="div" className="relative inline-block text-left"   >
            <div  >
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 
              rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900
              shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"  >
                {item.matchType}
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"

            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-[20rem] items-center
          text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1 flex flex-col"  >

                  <Menu.Item  >
                    <>
                      {
                        item?.seriesMatches?.map((matchDetails) => (
                          <MatchCard matchDetails={matchDetails} />

                        ))
                      }
                    </>

                  </Menu.Item>

                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ))}
    </div>
  )
}

export default MatchList