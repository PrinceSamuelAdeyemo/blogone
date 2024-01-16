import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

import "../styles/css/homepage.css";
//import sam_pic from "../images/sam_pic"

const Homepage = () => {
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
          <a href=''>CryptoEdu Icon</a>
          <div>
            <ul className='nav_bar_con'>
              <li>Home</li>
              <li>Blog</li>
              <li>Courses</li>
              <li>About</li>
              <li className='contact'>Contact</li>
            </ul>
          </div>
        </nav>

        <div className='intro'>
          
          <p>The latest articles and courses to improve your crypto knowledge.</p>
          <p>Master Blockchain, Web3, Defi, NFT, Game-Fi and many more.</p>

          <input type='email' placeholder='Email Address'></input>
          <button>Subscribe</button>
        </div>

        <div className='blogs-intro'>
          <p>Latest Blogs</p>
        </div>

        <div className='blogs'>
          <div className='blog-categories'>
            <p><h3>Categories</h3></p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
          </div>

          <div className='latestblogs'>
            
            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                  </div>
                  <p><h2>Title goes here Title goes here Title goes here Title goes here </h2></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        

      </>
    </HelmetProvider>
    

    
  )
}

export default Homepage;