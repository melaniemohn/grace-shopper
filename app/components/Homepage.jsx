import React from 'react'
import { Glyphicon, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import App from './App'

const Homepage = () => {
  const carouselInstance = (
        <Carousel>
          <Carousel.Item>
            <img width={800} height={300} alt="800x300" src="https://i2.wp.com/kimtownend.com/wp-content/uploads/2017/05/landscape-1474822198-how-to-make-pancakes.jpg?resize=800%2C300&ssl=1"/>
            <Carousel.Caption>
              <h3>FullStacks on Stacks on Stacks</h3>
              <Link to="/categories/1" activeClassName="active">PANCAKES AND MORE!</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={800} height={300} alt="800x300" src="http://profile.zilzar-cdn.com/abaa139fc7e9478dbd6b5a3552041c51z.jpg"/>
            <Carousel.Caption>
              <h3>COFFEE</h3>
              <Link to="/categories/2" activeClassName="active">SEE ALL OUR COFFEE OPTIONS</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={800} height={300} alt="800x300" src="http://imagesvc.timeincapp.com/?q=60&url=https%3A%2F%2Fextra-crispy-media.s3.amazonaws.com%2Fassets%252Fmessage-editor%252F1464884221107-breakfast-emojis.jpg"/>
            <Carousel.Caption>
              <h3>So Much More lol</h3>
              <Link to="/products" activeClassName="active">SEE ALL OUR PRODUCTS</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )
  return (
    <div>
      {carouselInstance}
    </div>
  )
}

export default Homepage
