import React from 'react'
import { Comment } from './Comment'

export const AllComments = () => {
  return (
    <div className='main'>
      <p>{commentsData.author + ' - id : ' +commentsData.id}</p>
      <b>{commentsData.body}</b>
      {commentsData.replies.map((comments)=>
         <Comment key={comments.id} data={comments} />
      )}
    </div>
  )
}

var commentsData = {
id: "1",
author: "albert",
body: "Whats the status?",
timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
points: "2",
replies: [
  {
    id: "9",
    author: "Admin",
    body: "First comment",
    timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
    points: "3",
    replies : [
      {
         id: "3",
      author: "haren",
      body: "Wrote the test suites, waiting for approval?",
      timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
      points: "3",
      replies : [
        {
           id: "3",
          author: "haren",
          body: "Wrote the test suites, waiting for approval?",
          timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
          points: "3",
        }
      ]
      }
    ]
  },
  {
    id: "3",
    author: "haren",
    body: "Wrote the test suites, waiting for approval?",
    timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
    points: "3",
    replies: [ 
      {
        id: "4",
        author: "albert",
        body: "Thanks for the update!",
        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
        points: "8"
      }, {
        id: "5",
        author: "Ramdas",
        body: "Thanks for the Commet!",
        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
        points: "8"
      }
    ]
  },
  {
    id: "2",
    author: "Nrupul",
    body: "looking forward for the demo!",
    timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
    points: "2",
    replies : [
       {
        id: "6",
        author: "Ramdas",
        body: "Thanks for the Commet!",
        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
        points: "8",
        replies :[
          {
            id: "7",
            author: "Ram Patil",
            body: "Thank you..",
            timestamp: "Sun Feb 13 2022 18:15:45 GMT+0530",
            points: "8",
          },
          {
            id: "8",
            author: "Munna Babu",
            body: "The End",
            timestamp: "Sun Feb 13 2022 18:15:45 GMT+0530",
            points: "8",
          }
        ]
      }
    ]
  }
]
}