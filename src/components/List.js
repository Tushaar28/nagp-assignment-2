import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function List(props) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const requestBlogs = (async () => {
            const url = "http://localhost:8080/get/all";
            const response = await axios.get(url);
            var tempBlogs = [];
            for (var i = 0; i < response.data.length; i++) {
                const element = response.data[i];
                var record = {};
                for (let key in element) {
                    record[key] = element[key];
                }
                tempBlogs.push(record);
            }
            setBlogs(tempBlogs);
        })();

    }, [props.updated]);

    return (
        <div>
            <h2 style={{
                marginLeft: "40px",
            }}> List </h2>
            {blogs.map((blog, blogIndex) => {
                return (
                    <ul key={blogIndex}>Blog Id = {blog.id}, Title: {blog.title}, Description: {blog.description}
                    </ul>
                )
            }
            )}
        </div>
    )
}
