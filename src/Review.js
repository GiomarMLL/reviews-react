import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './data'

import people from './data'

const Review = () => {
  const [index,setIndex] = React.useState(0)
  const {name,job,image,text} = people[index]
  
  const nextPerson = () =>{
      
      if(index === people.length-1){
         setIndex(0)
      }else{
        setIndex(index+1)
      }
  } 
  const prevPerson = () =>{
      
      //console.log(index)
      if(index === 0){
        setIndex(people.length-1)
      }else{
        setIndex(index-1)
      }
      
  }
  const randomPerson = () =>{
     let randomIndex = Math.floor(Math.random()*people.length)

     while(randomIndex === index)
      randomIndex = Math.floor(Math.random()*people.length)
     setIndex(randomIndex)
  }
  return(
    <article className='review'>
        <div className='img-container'>
          <img alt={name}className='person-img'src={image}/>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn'onClick={prevPerson}><FaChevronLeft/></button>
          <button className='next-btn'onClick={nextPerson}><FaChevronRight/></button>
        </div>
        <button className='random-btn'onClick={randomPerson}>Surprise me</button>
    </article>
  )
}

export default Review