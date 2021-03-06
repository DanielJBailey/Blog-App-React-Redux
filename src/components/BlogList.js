import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect,} from 'react-redux';
import Blog from './Blog';


const BlogList = ({blogs}) => (
    <BlogContainer>
        {blogs.length === 0 ? 
        <>
            <p>You currently have no submissions.</p> 
            <Link to ={`/blog/new`}>
            <CreatePost>Create Post</CreatePost>
            </Link>
        </>
        
        : null}
        {blogs.map(blog => (
            <Blog key={blog.id} {...blog}/>
        ))}
    </BlogContainer>
)

const BlogContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 100px;
    padding: 50px 0;
    height: 100%;
    min-height: calc(100vh - 82px);
    width: 1000px;
    @media (max-width: 425px) {
        width: 100%;
        padding-top: 10px;
    }
`;

const CreatePost = styled.button`
    padding: 10px 15px;
    border: 2px solid #2d3436;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    margin-top: 25px;
    color: #2d3436;
    &:hover {
        background-color: #2d3436;
        color: white;
    }
`;


const mapStateToProps = (state) => {
    return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);