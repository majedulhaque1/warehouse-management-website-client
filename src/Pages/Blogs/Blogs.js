import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='d-flex justify-content-between flex-wrap px-5 w-100'>
            <div className='blog-item shadow-lg p-3 mt-4'>
                <h2 className='text-warning'>Defferance between JavaScript And Node JS?</h2>
                <h3>JavaScript</h3>
                <p>
                    JavaScript is a programming language.And JavaScript is high level and interprete programming language.JavaScript can run only browsers.JavaScript used for client side.And JavaScript used for front end development.JavaScipt is written in c++.
                </p>
                <h3>Node Js</h3>
                <p>
                    Node JS is a javascript runtime environment.We can run javascript outside of the browser with the help of Node JS Runtime.We use Node Js for Back End Development.Node js is Written in c,c++ and JavaScript.
                </p>
            </div>
            <div className='blog-item shadow-lg p-3 mt-4'>
                <h2 className='text-warning'>When we use Node and mongodb?</h2>
                <h3>When we use node js?</h3>
                <p>
                    Node js is a javascript runtime environment.Node js use for non-blocking.And node js nature is single treaded.Node js is very fast.Node js is lightweight and efficient.And node js use the asynchronous mode operations.We use node js when we develop Input/Output incentive task application.If if give example when a user enter the application and user give input and get output something
                    that's why we use node js.Becuase node js can handle network application efficiently.That's why user get better exprence.
                </p>
                <h3>When we use mongodb?</h3>
                <p>
                    Mongodb is NoSQL Database.Mongodb id non relational database.And mongodb flexible for develepers.We can store data in mongodb JSON format.Mongodb is flexible and highly ableable for internet application.That why we use mongodb.when we need mongodb.when we need to flexibility and we dont't have many time for build application.
                </p>
            </div>
            <div className='blog-item shadow-lg p-3 mt-4'>
                <h2 className='text-warning'>Defference between SQL and NoSQL?</h2>
                <h3>What is SQL Database?</h3>
                <p>
                    <p>1. SQL database is Structure query language.</p>
                    <p>2. It is relational database system.</p>
                    <p>3. SQL Database verticaly scaleable.</p>
                    <p>4. It is table based database.</p>
                </p>
                <h3>What is NoSQL database?</h3>
                <p>
                    <p>1. NoSQL database is not only Structure query language.</p>
                    <p>2. It is non relational database system.</p>
                    <p>3. NoSQL database horizentaly scaleabale.</p>
                    <p>1. It is docoment based database or JSON.</p>
                </p>
            </div>
            <div className='blog-item shadow-lg p-3 mt-4'>
                <h2 className='text-warning'>What is the purpose of JWT?</h2>
                <p>
                    JWT JSON web token.JWT used to share security information client to server.Each JSON web token contains encoded JSON object.And JWT are using cryptographic algorithom.We can secure data and secure application.
                </p>
            </div>
        </div>
    );
};

export default Blogs;