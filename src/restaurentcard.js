import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../src/card.scss'

const PostsData = [
  //   {
  //     "category": "News",
  //     "title": "CNN Acquire BEME",
  //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  //     "image": "https://source.unsplash.com/user/erondu/600x400"
  //   },
  //   {
  //     "category": "Science",
  //     "title": "Nomad Lifestyle",
  //     "text": "Learn our tips and tricks on living a nomadic lifestyle",
  //     "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  //   },

  {
    restaurantID: "6317637",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  },

  {
    restaurantID: "6317638",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  },
  {
    restaurantID: "6317639",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  },
  {
    restaurantID: "6317640",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  },
  {
    restaurantID: "6317641",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  },
  {
    restaurantID: "6317642",
    restaurantName: "Le Petit Souffle",
    cuisines: "French",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "3659",
  }

  //   {
  //     "category": "Development",
  //     "title": "React and the WP-API",
  //     "text": "The first ever decoupled starter theme for React & the WP-API",
  //     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  //   },
  //   {
  //     "category": "News",
  //     "title": "CNN Acquire BEME",
  //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  //     "image": "https://source.unsplash.com/user/erondu/600x400"
  //   },
  //   {
  //     "category": "Travel",
  //     "title": "Nomad Lifestyle",
  //     "text": "Learn our tips and tricks on living a nomadic lifestyle",
  //     "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  //   },
  //   {
  //     "category": "Development",
  //     "title": "React and the WP-API",
  //     "text": "The first ever decoupled starter theme for React & the WP-API",
  //     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  //   }
];

class RestaurentCard extends Component {
    constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
    render () {
        return(
            <div>
      <header className="app-header"></header>
      <Title />
      <div className="app-card-list" id="app-card-list" style={{display:'flex', flexDirection:"column" }}>
        {
          Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>

        )

    }

}

class Title extends React.Component {
  render() {
    return <section className="app-title">
      <div className="app-title-content">
        <h3 style={{color:'green'}}>List of Restaurants</h3>

      </div>
    </section>
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }

}
class Card extends React.Component {
  render() {
    return (
      <article className="card">
        {/* <CardHeader category={this.props.details.category} image={this.props.details.image}/> */}

        <CardHeader 
        restaurantID={this.props.details.restaurantID} 
        restaurantName={this.props.details.restaurantName} />
        
        {/* <CardBody title={this.props.details.title} text={this.props.details.text}/> */}

        <CardBody 
        cuisines={this.props.details.cuisines} 
        averageCostForTwo={this.props.details.averageCostForTwo}
        currency={this.props.details.currency}
        hasTableBooking={this.props.details.hasTableBooking}
        hasOnlineDelivery={this.props.details.hasOnlineDelivery}
        aggregateRating={this.props.details.aggregateRating}
        ratingColor={this.props.details.ratingColor}
        ratingText={this.props.details.ratingText}
        votes={this.props.details.votes}
         />

      </article>
    )
  }
}


class CardHeader extends React.Component {
  render() {
             //const { image, category } = this.props;
             const { restaurantID, restaurantName } = this.props;
             // var style = {
             //     backgroundImage: 'url(' + image + ')',
             // };

             return (
               <header className="card-header">
                 {/* <h4 className="card-header--title">{category}</h4> */}
                 <img
                   src="https://image.flaticon.com/icons/svg/227/227390.svg"
                   alt=""
                   style={{height:"100px", width:"90px"}}
                 />
                 <h4 className="card-header--title">
                   Restaurant ID : {restaurantID}
                 </h4>
                 <h4 className="card-header--title">
                   Restaurant Name: {restaurantName}
                 </h4>
               </header>
             );
           }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        {/* <p className="date"></p> */}
        
        {/* <h2>{this.props.title}</h2> */}

        
        {/* <p className="body-content">{this.props.text}</p> */}

        <p className="body-content">

        <div>
            Cuisines:{this.props.cuisines}
        </div>
            <div>
            Average Cost For Two: {this.props.averageCostForTwo}
            </div>
            <div>
              Currency:  {this.props.currency}
            </div>
            <div>
                Has table for Two? : {this.props.hasTableBooking}
            </div>
            <div>
                Has Online Delivery : {this.props.hasOnlineDelivery}
            </div>
            <div>
                AGGREGATE RATING : {this.props.aggregateRating}
            </div>
            <div>
                RATING COLOR : {this.props.ratingColor}
            </div>
            <div>
                RATING TEXT : { this.props.ratingText}
            </div>
            <div>
                VOTES : {this.props.votes}
            </div>
                
            
        </p>
        
        <Button />
      </div>
    )
  }
}
 export default RestaurentCard;