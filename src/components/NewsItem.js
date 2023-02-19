import React from 'react'

//export class NewsItem extends Component {
  const NewsItem=(props)=>{  
  //render() {
  let  {title,description,imageUrl,url,author,date,source}=/*this.props;*/ props;
    return (
      <div className="my-3">
       <div className="card" style={{width: "18rem"}}>
        
        
 
  
  <div style={{display:'flex', justifyContent:'flex',position:'absolute',right:'0'}}>
  <span className=" badge rounded-pill bg-danger" /*style={{left:'90%', zIndex:1}}*/>
    {source} 
    
  </span>
  </div>
  <img src={imageUrl?imageUrl:"https://static.theprint.in/wp-content/uploads/2022/10/ESO-VLT.jpg"} className="card-img-top" alt="..."/>
  < div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  //}
}

export default NewsItem