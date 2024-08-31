import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import logo from '../../src/assets/jack.png'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import { API_KEY } from '../../src/data.js'
import moment from 'moment'

const CommentCard = ({videoId, commentCount}) => {

    const [commentData, setCommentData] = useState([])

    const fetchCommentData = async() =>{
        const commentdataurl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentdataurl).then(res=>res.json()).then(data => setCommentData(data.items))
    }

    useEffect(()=>{
        fetchCommentData();
    },[videoId])

    return (
    <div>
        <h2>{commentCount} Comments</h2>

        <div className='comment-container'>
            {commentData.map((item, index)=>{
                return(
                    <div className="comment" key={index}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='user-logo'/>
                        <div className='comment-info'>
                            <div>
                                <span className='channel-id'>{item.snippet.topLevelComment.snippet.authorDisplayName}</span>
                                <span className='comment-date'>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                            </div>
                        <div className='comment-para'>{item.snippet.topLevelComment.snippet.textOriginal}</div>
                        <div className='comment-reactions'>
                            <span><img src={like} alt="" className=''/>{item.snippet.topLevelComment.snippet.likeCount}</span>
                            <span><img src={dislike} alt="" /></span>
                        </div>
                    </div>
            </div>
                )
            })}
            
        </div>

            

    </div>
    )
}

export default CommentCard