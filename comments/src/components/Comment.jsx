import React from 'react'

export const Comment = ({data}) => {
    console.log(data)
    if(data.replies) console.log(data.replies.lengths)
  return (
    <div className='comment' >
            <p>{data.author + ' - id:' + data.id }</p>
            <b>{data.body}</b>
            <span>
                <button>Reply</button>
                <button>Give Award</button>
                <button>Share</button>
                <button>Report</button>
                <button>Save</button>
            </span>
        
        {data.replies ? data.replies.map((replie)=>
            <Comment data={replie} />
        ) : <p></p>}
    </div>
  )
}


// id: "1",
// author: "albert",
// body: "Whats the status?",
// timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
// points: "2",
// replies: []
