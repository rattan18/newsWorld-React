import React from 'react'

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, readMore, author, time, source } = props;
    return (
      <>
        <div className='my-3'>

          <div className="card">
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '-6px',
              top: '-10px'
            }}>
              <span class=" badge rounded-pill bg-danger" >
                {source}
              </span>
            </div>

            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}....</p>
              <p class="card-text"><small class="text-body-secondary">By {author} on {time}</small></p>
              <a href={readMore} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>

        </div >

      </>
    )
  
}

export default NewsItem
