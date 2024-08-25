const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Devesh Tuteja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
      replies: [],
    },
    {
      name: "Devesh Tuteja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
      replies: [],
    },
    {
      name: "Devesh Tuteja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
      replies: [
        {
          name: "Devesh Tuteja",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
          replies: [
            {
              name: "Devesh Tuteja",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
              replies: [
                {
                  name: "Devesh Tuteja",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
                  replies: [
                    {
                      name: "Devesh Tuteja",
                      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
                      replies: [
                        {
                          name: "Devesh Tuteja",
                          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Devesh Tuteja",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
          replies: [],
        },
        {
          name: "Devesh Tuteja",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
          replies: [],
        },
      ],
    },
    {
      name: "Devesh Tuteja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
      replies: [],
    },
    {
      name: "Devesh Tuteja",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus veniam sequi tenetur",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex py-2 bg-gray-100 shadow-sm rounded-md my-2">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="user-icon"
          className="w-12 h-12 rounded-full"
        />
        <div className="px-2">
          <p className="font-bold"> {name} </p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    //DON'T USE INDEX AS KEY
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-4 border border-l-black ml-4">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
