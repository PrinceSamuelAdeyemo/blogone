import React, { useEffect, useState} from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

import NewsCard from './NewsCard';

import "../styles/css/homepage.css";
import "../icon/fontawesome-icons/css/all.css"
import "../icon/fontawesome-icons/css/fontawesome.css"
import "../icon/fontawesome-icons/css/brands.css"
//import sam_pic from "../images/sam_pic"

import { main_api } from "../components/Urls"

const Homepage = () => {

  const nextPage = () =>{
    alert("hello, there")
  }

  const check = async() => {
    await fetch('http://localhost:8000/api/categories')
  .then(response => (
    response = response.json()
  ))
  .then((data) => (
    console.log(data)
   ) )
  .catch(error => {
    console.log(error)
  });

  console.log("HH")
  }

  useEffect(() => {
    check()
    console.log("Check function should have triggered!")
  })


  return (
    <HelmetProvider>
      <Helmet>
        <head>
          {`
            <title>Crypto Edu</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='author' content='Samuel Adeyemo' />
            <meta name='application-name' content='crypto_edu' />
            <meta name='description' content='Learn more about crypto stuffs' />
            <meta name='keywords' content='crypto bitcoin ethereum' />
          `}
        </head>
      </Helmet>

      <>
        <nav className='nav_bar'>
          <a className='brandlogo' href=''><img className='brandlogoimg' src={require("../images/_sam_pic.png")} alt='CryptoEdu'/></a>
          <div>
            <ul className='nav_bar_con'>
              <li><a href=''>Home</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Courses</a></li>
              <li><a href=''>About</a></li>
              <li className='contact' href=''>Contact<a></a></li>
            </ul>
          </div>
        </nav>

        <div className='intro'>
          <div className='intro-text'>
            <p>The latest articles and courses to improve your crypto knowledge.</p>
            <p>Master Blockchain, Web3, Defi, NFT, Game-Fi and many more.</p>

            <input type='email' placeholder='Email Address' />
            <button onClick={check}>Subscribe</button>
          </div>
          <div className='intro-img'>
            <img className='intro-img-main' src={ require ("../images/_sam_pic.png")} alt='intro image' />
          </div>
            
        </div>

        <div className='blogs-intro'>
          <p>Latest Blogs</p>
        </div>

        <div className='blogs'>
          <div className='blog-categories'>
            <p>Categories</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
          </div>

          <div className='latestblogs'>
            
            <NewsCard/>
            
          </div>

          

        </div>

        <div className='newsletter-div'>
          
          <div className='newsletter-subdiv'>
            <div className='newsletter-img'>
            </div>
            <div className='newsletter-text'>
              <p>Subscribe to our newsletter</p>
              <p>Master Crypto, Blockchain, DeFi, NFT, GAME-Fi and so much more with available resources for free! Join our Newsletter and get alert when new articles, topics, or courses are published.</p>
            </div>
            <div className='subscribe'>
              <input type='email' placeholder='Email Address' />
              <button>Subscribe</button>
              <p>We promise not to spam you.</p>
            </div>

          </div>
        </div>

        <footer className='footer'>
          <p className='footer-text-topic'>Dive into Web3</p>
          <div className='footer-text'>
            
            <div className='firstfootercol'>
             
              <p>The latest articles and courses to help you upgrade your skills and learn the latest trends. Master web Development with these amazing resources that are available for free!</p>
            </div>
            <div className='secondfootercol'>
              <ul>
                <li>Home</li>
                <li>Blogs</li>
                <li>Courses</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div className='thirdfootercol'>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

          </div>
          <div className='footer-icon'>
            <div className='footer-brands'>
              <p><i className='fa fa-brands fa-facebook'></i></p>
              <p><i className='fa fa-brands fa-instagram'></i></p>
              <p><i className='fa fa-brands fa-linkedin'></i></p>
              <p><i className='fa fa-brands fa-youtube'></i></p>
              <p><i className='fa fa-brands fa-slack'></i></p>
              <p><i className='fa fa-brands fa-discord'></i></p>
              
            </div>
            <div className='footer-mini-details'>
              <div className='copyright'>
                <p>COPYRIGHT @ 2022 Dive Into Skills</p>
              </div>
              <div className='aboutme'>
                <p>Developed by: Ahmad Raza</p>
              </div>
            </div>
            
          </div>
        </footer>

        

      </>
    </HelmetProvider>
    

    
  )
}

export default Homepage;