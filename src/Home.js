import {useState, useEffect} from 'react';
import BlogList from './BlogList';

function Home () {

  const [name, setName] = useState('Cathy');
  const [age, setAge] = useState('32')
  const [blogs, setBlogs] = useState(['']);
  const [name1, setName1] = useState('mario')
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  const handleClick = (e) => {
    setName('Marta')
    setAge('22')
    console.log('hello nija', e)
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name , e.target)
  }

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/blogss`)
        .then(res => {
          if(!res.ok) {
            throw Error('could not fetch the data for that resourcceee')
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, []);

  return (
    <div className="home">
    {error && <div>{error}</div>}
    <h2>Homepage</h2>
    <p>{name} is {age} years old.</p>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={(e) => handleClickAgain('cathy', e)}>Click Me Again</button>

    <button onClick={()=> setName1('luigi')}>Change Name</button>
    {isPending && <div> Loading ...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}  {/*property value*/}
    {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />}

    <p>{name1}</p>
    </div>

  )
}

export default Home;


// { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
// { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
// { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
