import {useState} from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();  //this object 'history' represents useHistory function from reactrouter dom

  //react to the submit event. (not attaching click event to button and react to that.)
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from refreshing
    const blog = {title, body, author}

    setIsPending(true)

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      // history.go(-1)
      //redirect user to home Homepage
      history.push('/')
    })

  }


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>....Loading</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>

    </div>
  )
};

export default Create;
