import {useState} from 'react';
import BlogList from './BlogList';

function Home () {

  const [name, setName] = useState('Cathy');
  const [age, setAge] = useState('32')
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleClick = (e) => {
    setName('Marta')
    setAge('22')
    console.log('hello nija', e)
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name , e.target)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain('cathy', e)}>Click Me Again</button>

      <BlogList blogs={blogs} title="All Blogs" />  {/*property value*/}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
    </div>

  )
}

export default Home;
