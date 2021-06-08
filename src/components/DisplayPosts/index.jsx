import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DisplayPosts = () => {

    const [posts, setPosts] = useState([])
    const fetchAllPosts = async () => {

        const response = await fetch(`http://localhost:3000/articles`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

        if (response.status !== 200) {
            alert("Something wrong during rendering posts ...")
            return
        }

        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    return (
        <div>
            {posts &&
                <div className="row container">
                    {posts.map((post, index) =>
                        <div key={index} className="col-md-2 bg-dark rounded text-white p-3 me-3 mb-2">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>)}
                </div>
            }
        </div>

    )
}


export default DisplayPosts
