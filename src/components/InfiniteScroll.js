import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => {
    const [postData, setPostData] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const getPostData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({
            _limit: 6,
            page:page,
        }));
        const data = await response.json();
        setPostData((oldData) => [...oldData, ...data]);
        setLoading(false);
    };

    useEffect(() => {
        getPostData();
    }, [page]);

    const handleScrollEvent = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight){
            setPage(prev => prev + 1);
            setLoading(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        }
    },[]);
  return (
    <div>
        {postData.map((post) => (
            <div key={post.id} style={{border: '1px solid black', padding:'2px', width:'300px', height:'200px', display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3>{post.title.substr(0,15)}</h3>
                <p>{post.body}</p>
            </div>
        ))}
        {loading && <h2>Loading...</h2>}
    </div>
  )
}

export default InfiniteScroll;