import React from "react";
import ReactPlayer from "react-player";
import "./Detail.css";

class Detail extends React.Component{
  componentDidMount(){
      const { location,history } = this.props;
      if(location.state === undefined){
        history.push("/");
      }
  }
  render(){
    window.scrollTo(0, 0);
    const {location} = this.props;
    const divStyle = {
      'padding-top' : '100px',
      'padding-bottom' : '100px',
      'min-height': '100%',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      height: '100vh',
      background : `linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.4) 40%,
        rgba(20, 20, 20, 0.85)
      ),url(${location.state.back_poster})`,
      backgroundSize: 'cover'
    };
    if(location.state){
      return(
        <div className ="detail_background" style = {divStyle}>
          <div className="detail_container">
          <img src = {location.state.poster} alt = {location.state.title} title = {location.state.title}/>
          
          <div className="detail_movie_data">
            <h2 className="detail_movie_title">{location.state.title}</h2>
            <h5 className="detail_movie_year">{location.state.year}</h5>
            <ul className="detail_movie_genres">
              {location.state.genres.map((genre,index) => (
                <li key={index} className="genres_genre">{genre}</li>
              ))}
            </ul>
            <p className="detail_movie_summary">{location.state.summary}</p>
            <div className="detail_movie_trailer">
              <ReactPlayer className="detail_trailer" url = {`https://www.youtube.com/watch?v=${location.state.trailer}`} 
              width='100%' height='100%' playing controls muted/>
            </div>
          </div>
         
        </div>
        </div>
        
      );
    }
    else{
      return null;
    }
  }
}
export default Detail;
