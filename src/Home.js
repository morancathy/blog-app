import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home () {
  // const {data: blogs, isPending, error} = useFetch(`http://localhost:8000/blogs`);
  const [name, setName] = useState('Cathy');
  const [age, setAge] = useState('32')
  const [name1, setName1] = useState('mario')
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

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



  return (
    <div className="home">
    {/*}{error && <div>{error}</div>}*/}
    <h2>Homepage</h2>
    <p>{name} is {age} years old.</p>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={(e) => handleClickAgain('cathy', e)}>Click Me Again</button>

    <button onClick={()=> setName1('luigi')}>Change Name</button>
    {/*{isPending && <div> Loading ...</div>}*/}
    {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}  {/*property value*/}
    {/*blogs && <BlogList blogs={blogs} title="All Blogs" />*/}
    {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/>}

    <p>{name1}</p>
    </div>

  )
}

export default Home;
