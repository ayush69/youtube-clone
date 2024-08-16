import React from 'react'
import './Recommended.css'
import thumbnail from '../../src/assets/thumbnail3.png'
import options from '../../src/assets/options.png'

const Recommended = () => {
  return (
    <div className='recommended-section'>

        <div className="rec-vid-card">
            
            <img src={thumbnail} className='rec-vid-thumbnail' alt="" />
            
            <div className='rec-vid-info'>
                <div className='rec-vid-title'>
                    Get Music Premium to listen to music ad-free, offline & with your screen
                </div>
                <div className='rec-vid-channel-name'>
                    Youtube Music
                </div>
                <div className='rec-vid-date-info'>
                    70K views &bull; 2 days ago
                </div>
            </div>
            <div className=''>
                <img src={options} className='rec-vid-options' alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Recommended