import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import TweetComponent from './Tweet'
import TweetBox from './TweetBox'

interface Props {
  tweets: Tweet[]
}

function Feed({tweets}: Props) {
  console.log(":::::::::::::  Feed.tsx  ::::::::::::::", tweets) 
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex items-center justify-between'>
        <h1 className='p-5 text-xl font-bold '>Home</h1>
        <RefreshIcon className='h-8 w-8 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125' />
      </div>

      {/* TweetBox */}
        <div>
            <TweetBox />
        </div>

      {/* Posts */}
        {/* <div>
            {tweets.map((tweet) => (
                // <TweetComponent key={tweet._id} tweet={tweet} />
            ))}
        </div> */}
    </div>
  )
}

export default Feed
