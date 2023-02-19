import React, /*{ Component }*/ {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


//export class News extends Component { class based
  const News=(props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   // document.title=`${thiscapitalizeFirstLetter(props.category)} - NewsMaster`;
   

   //capitalizeFirstLetter=(string)=>{
   const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  document.title=`${capitalizeFirstLetter(props.category)} - NewsMaster`;
   /* articles=[ 
       
        {
        "source": {
        "id": "news-com-au",
        "name": "News.com.au"
        },
        "author": "Nic Savage",
        "title": "Aussie cricket star spotted in enemy territory",
        "description": "<p>Welcome to news.com.au's live coverage of the T20 World Cup contest between Australia and New Zealand at the SCG.</p>",
        "url": "https://www.news.com.au/sport/cricket/t20-world-cup-live-blog-australia-vs-new-zealand-at-the-scg/live-coverage/7619154bae3024b1001cc6b223489f5c",
        "urlToImage": "https://content.api.news/v3/images/bin/6868f0d2b9d9268809a249d17b547b02",
        "publishedAt": "2022-10-22T02:25:00Z",
        "content": "Australias sellout T20 World Cup opener against New Zealand at the SCG on Saturday evening could be tarnished by rain.\r\nThe Bureau of Meteorology is currently estimating a 90 per cent chance of rain … [+2030 chars]"
        },
        {
        "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
        },
        "author": "Simon Smale",
        "title": "T20 World Cup 2022 team-by-team guide, how to watch, when is it",
        "description": "The Super 12 phase of the 2022 Men's T20 Cricket World Cup gets underway on Saturday. Here's your team-by-team guide to the tournament — and when Australia is in action.",
        "url": "http://www.abc.net.au/news/2022-10-22/t20-world-cup-2022-team-by-team-guide/101564636",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1d525fdb4ceebfce3c818ee968ce9cda?impolicy=wcms_crop_resize&cropH=1198&cropW=2131&xPos=463&yPos=85&width=862&height=485",
        "publishedAt": "2022-10-21T19:15:57Z",
        "content": "The 2022 T20 World Cup has been underway for the best part of a week now, as eight nations looked to join the pre-qualified eight in the super 12 phase of the tournament.\r\nThere have already been sho… [+11905 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
        ]*/
        //all this.props are chanaged to props in function based from claass based
  /* constructor(props){
        super(props);
        console.log("Hello I am a constructor from News Component");*/
       /* this.state={
         //articles:this.articles,
         articles:[],
         loading:true,
         page:1,
         totalResults:0
        
        } used in class based in function based altered already at 10-13*/
        //document.title=`${this.capitalizeFirstLetter(props.category)} - NewsMaster`;
   // }
   // async updateNews(){ class based
   const updateNews=async ()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=publishedAt&category=${props.category}&apiKey=8df26a4a27f54a65a5c92c60f30da8ae&page=${page}&pageSize=${props.pageSize}`;
      props.setProgress(30);
     // this.setState({loading:true});
      setLoading(true)
      
      let data=await fetch(url);
      
      let parsedData=await data.json();
      props.setProgress(70);
      console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.articles.totalResults)
      setLoading(false)
     /* this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResult,
        loading:false}) used in class based just above done in function based */
        props.setProgress(100);
        
        
    }
    useEffect(() => {
      document.title=`${capitalizeFirstLetter(props.category)} - NewsMaster`;
      //this.updateNews();},[]//instead of componentDid mount used in class based component use useEffect in function based component
      updateNews();},[]
      )
    

    /*async componentDidMount(){
      // console.log("cdm");
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=publishedAt&category=${props.category}&apiKey=8df26a4a27f54a65a5c92c60f30da8ae&pageSize=${props.pageSize}`;

      // this.setState({loading:true});
      // let data=await fetch(url);
      // let parsedData=await data.json();
      // console.log(parsedData);
      // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
      this.updateNews();
    }*/
   // handlePreviousClick=async()=>{
  /* const handlePreviousClick=async()=>{
console.log("Previous")
// let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=publishedAt&category=${props.category}&apiKey=8df26a4a27f54a65a5c92c60f30da8ae&page=${this.state.page-1}&pageSize=${props.pageSize}`;
// this.setState({loading:true});
//       let data=await fetch(url);
//       let parsedData=await data.json();
//       console.log(parsedData);
//       this.setState({
//         page:this.page-1,
//         articles:parsedData.articles,
//         loading:false
//       })
//await this.setState({page:this.state.page-1});
await setPage(page-1);
//this.updateNews();
updateNews();
    }*/
   // handleNextClick=async()=>{ class based
  /* const  handleNextClick=async()=>{ //function based
      console.log("Next");
    
//       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=publishedAt&category=${props.category}&apiKey=8df26a4a27f54a65a5c92c60f30da8ae&page=${this.state.page+1}&pageSize=${props.pageSize}`;
// this.setState({loading:true});
//       let data=await fetch(url);
//       let parsedData=await data.json();
//       console.log(parsedData);
//       this.setState({loading:false});//either do this or
//       this.setState({
//         page:this.state.page+1,
//         articles:parsedData.articles
//         //or do loading:false
//       })
//await this.setState({page:this.state.page+1})//if await is not used then after clicking next 1 tym news will not get updated again pressing it then it will update so firstly wait till the page is updated to page+1 then call update news func.
await setPage(page+1)//if await is not used then after clicking next 1 tym news will not get updated again pressing it then it will update so firstly wait till the page is updated to page+1 then call update news func.
//this.updateNews();
updateNews();
    }*/
   // fetchMoreData = async() => {
   const fetchMoreData = async() => {
   // this.setState({page:this.state.page+1})
    setPage(page+1)
     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=publishedAt&category=${props.category}&apiKey=8df26a4a27f54a65a5c92c60f30da8ae&page=${page+1}&pageSize=${props.pageSize}`;
     
      // this.setState({loading:true});
      setLoading(true)
      let data=await fetch(url);
       
      let parsedData=await data.json();
      
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
     // this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults, class based fb above it
   // loading:false*/})
    };

  //render() {
    console.log("render")
    return (
    
       <> 
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px' }}>NewsMaster-Top  {capitalizeFirstLetter(props.category)} HeadLines</h1>
         {/* {this.state.loading && <Spinner/>}  */}
         {loading && <Spinner/>} 
        <InfiniteScroll
          //dataLength={this.state.articles.length}
          dataLength={articles.length}
          //next={this.fetchMoreData}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {/*!this.state.loading && */articles.map((element)=>{
return  <div className="col md-4" key={element.url}>
<NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
</div>
        })}
        
           </div>
           </div>
           </InfiniteScroll>
           
        {/* <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePreviousClick}>&larr; Previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>  */}
         </>  
        
       
    )
 // }
}
//static defaultProps={ class based nd and the top
News.defaultProps={// function based nd at last
  country:'in',
  pageSize:8,
  category:'general',
}
//static propTypes={ class based
  News.propTypes={//function based
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News