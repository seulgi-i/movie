

import React from 'react'
import { Badge, Carousel } from 'react-bootstrap'

const RecommendCard = ({ item }) => {
  console.log("item?", item)
  return (
    <div>
      <div>
        <Badge pill bg="danger">recommendations</Badge>
        <p></p>
      </div>


      <Carousel>
        {

          item?.map((item) => (

            <Carousel.Item interval={2500} >

              <div className='recomimg'
                style={{
                  backgroundImage:
                    "url(" + `https://www.themoviedb.org/t/p/w440_and_h660_face${item?.poster_path}` +
                    ")",
                }} />
            </Carousel.Item>
          ))
        }
      </Carousel >

    </div>
  )



}

export default RecommendCard
