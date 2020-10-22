import React from 'react';
import './details.css'

function Details() {
    return (
        <>
            <div className='useDiv'>
                <h3 className='use'>When to use !</h3>
                <p className='use'>JSONPlaceholder is a free online REST API that you can use <b>whenever you need some fake data.</b> It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally</p>
            </div>
            <div className='data'>
                <h3 data_heading>Resources</h3>
                <h3 className='data_heading'>JSONData comes with a set of 5 common resources:</h3>
                <ul>
                    <li><a href="https://babbaer.herokuapp.com/post/All">posts</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 posts</li>
                    <li><a href="https://babbaer.herokuapp.com/user/All">users</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5000 users</li>
                    <li><a href="https://babbaer.herokuapp.com/comment/All">comments</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500 comments</li>
                    <li><a href="https://babbaer.herokuapp.com/image/All">images</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5000 photos</li>
                    <li><a href="https://babbaer.herokuapp.com/todo/All">todos</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200 todos</li>
                </ul>
            </div>
            <div className='data'>
                <h3 className='data_heading'>Route</h3>
                <h5 className='data_heading'>All HTTP methods are supported. You can use http for your requests.</h5>
                <ul>
                    <li><a href="https://babbaer.herokuapp.com/post/All">/post/All</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET</li>
                    <li><a href="https://babbaer.herokuapp.com/post/one">/post/one</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET</li>
                    <li><a href="https://babbaer.herokuapp.com/post/one/comment">/post/one/comments</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET</li>
                    <li><a>/post/create</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POST</li>
                </ul>
                <h5 className='data_heading'><b>Note</b>: see Doc for more examples.</h5>
                <p className='love'>Coded and maintained with ❤️ by <a href="https://www.linkedin.com/in/manikant-kumar-550998192/">Manikant</a> © 2020</p>
            </div>
        </>
    );
}

export default Details;