
import CommentList from "./CommentList";

  
  const commentData = [{
    name: "Ajay Kumar",
    comment: "hello bahi log kese ho app log",
    reply: [
      {
        name: "Ajay Kumar",
        comment: "hello bahi log kese ho app log",
        reply: [
          {
            name: "Ajay Kumar",
            comment: "hello bahi log kese ho app log",
            reply: [
              {
                name: "Ajay Kumar",
                comment: "hello bahi log kese ho app log",
                reply: []
              },
            ]
          },
        ]
      },
    ]
  },
  {
  name: "Ajay Kumar",
    comment: "hello bahi log kese ho app log",
    reply: [
      {
        name: "Ajay Kumar",
        comment: "hello bahi log kese ho app log",
        reply: [
          {
            name: "Ajay Kumar",
            comment: "hello bahi log kese ho app log",
            reply: [
              {
                name: "Ajay Kumar",
                comment: "hello bahi log kese ho app log",
                reply: []
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Ajay Kumar",
      comment: "hello bahi log kese ho app log",
      reply: [
        {
          name: "Ajay Kumar",
          comment: "hello bahi log kese ho app log",
          reply: [
            {
              name: "Ajay Kumar",
              comment: "hello bahi log kese ho app log",
              reply: [
                {
                  name: "Ajay Kumar",
                  comment: "hello bahi log kese ho app log",
                  reply: []
                },
              ]
            },
          ]
        },
      ]
    },
    {
      name: "Ajay Kumar",
        comment: "hello bahi log kese ho app log",
        reply: [
          {
            name: "Ajay Kumar",
            comment: "hello bahi log kese ho app log",
            reply: [
              {
                name: "Ajay Kumar",
                comment: "hello bahi log kese ho app log",
                reply: [
                  {
                    name: "Ajay Kumar",
                    comment: "hello bahi log kese ho app log",
                    reply: []
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        name: "Ajay Kumar",
          comment: "hello bahi log kese ho app log",
          reply: [
            {
              name: "Ajay Kumar",
              comment: "hello bahi log kese ho app log",
              reply: [
                {
                  name: "Ajay Kumar",
                  comment: "hello bahi log kese ho app log",
                  reply: [
                    {
                      name: "Ajay Kumar",
                      comment: "hello bahi log kese ho app log",
                      reply: []
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          name: "Ajay Kumar",
            comment: "hello bahi log kese ho app log",
            reply: [
              {
                name: "Ajay Kumar",
                comment: "hello bahi log kese ho app log",
                reply: [
                  {
                    name: "Ajay Kumar",
                    comment: "hello bahi log kese ho app log",
                    reply: [
                      {
                        name: "Ajay Kumar",
                        comment: "hello bahi log kese ho app log",
                        reply: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
  ];


const CommentContainer = () => {
  return(
    <div className="comment-container">
      <CommentList comments={commentData}/>
    </div>
  );
};

export default CommentContainer;
