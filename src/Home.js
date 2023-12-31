import { useState } from 'react';
import Bloglist from "./Bloglist";
import { useEffect } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([ 
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs)
    }

    useEffect(() => {
      console.log('use effect ran')
      console.log(blogs)
    }, [name])

    return (
        <div className="home">
          <Bloglist blogs ={blogs} title = 'All blogs!' handleDelete = {handleDelete}/>
          <Bloglist blogs ={blogs.filter((blog) => blog.author === "mario" )} title = "Mario's Blogs" handleDelete = {handleDelete}/>
          <button onClick={() => setName('luigi')}>change name</button>
        </div>
      );
}
 
export default Home;