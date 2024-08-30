import React from 'react'
import './CommentCard.css'
import logo from '../../src/assets/jack.png'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'

const CommentCard = () => {



  return (
    <div>
        <h2>2899 Comments</h2>

        <div className='comment-container'>
            <div className="comment">
                <img src={logo} alt="" className='user-logo'/>
                <div className='comment-info'>
                    <div>
                        <span className='channel-id'>@jack3423 </span>
                        <span className='comment-date'>2 days ago</span>
                    </div>
                <div className='comment-para'>nice video....jfkj;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium ullam nostrum non praesentium modi quasi culpa, pariatur nesciunt inventore. Officiis laboriosam illum id libero corrupti voluptatem dolores, eos quidem.</div>
                <div className='comment-reactions'>
                    <span><img src={like} alt="" className=''/>50</span>
                    <span><img src={dislike} alt="" /></span>
                </div>
                </div>
            </div>
        </div>

         

    </div>
  )
}

export default CommentCard