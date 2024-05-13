import React from 'react'

const NewsCard = () => {
  return (
            <div className='news-insight'>
              <div className='insight-padding'>
                <div className='main-news-insight'>
                  <div className='news-insight-pic-div'>
                    <a href='#'>
                      <img className='news-insight-pic' src = {require("../images/sam__pic.png")} />
                    </a>
                    
                  </div>
                  <div className='news-insight-text'>
                    <a href='#'>
                      <p><h2>RONALDO DOES IT AGAIN!!!</h2></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tortor sit amet condimentum porttitor. Integer augue urna, volutpat in sapien a, convallis commodo quam.</p>
                    </a>
                    
                  </div>
                  <div className='news-insight-timestamp'>
                    <p>24/04/2022</p>
                    <p>By: Samuel Adeyemo</p>
                  </div>
                  <div className='clear'>

                  </div>
                </div>
              </div>
            </div>
  )
}

export default NewsCard