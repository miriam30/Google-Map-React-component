import React from "react"
import ReactDOM from 'react-dom'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import Mapx from './components/Mapx.jsx'
// import MyMapComponent from './components/MyMapComponent.jsx'
import Mapper from './components/Mapper.jsx'

import JobPostList from './components/JobPostList.jsx'
import PostJob  from './components/PostJob.jsx'




// class MyFancyComponent extends React.PureComponent {
class MyFancyComponent extends React.Component {




  constructor(props) {
   super(props);

   this.state = {
     isMarkerShown: true,
     name: 'John',
     age: 21,
     variablex: 0
   }

   this.clickListener = this.clickListener.bind(this);
   // thix = thix.bind(this)


 }

 clickListener(){

   // console.log(this.state.age)
   console.log(" click Listener: ")
   console.log(this.state.variablex)
   this.setState({variablex: 1});
   console.log(this.state.variablex)
   console.log("******************")

 }


  componentDidMount() {
    // this.delayedShowMarker()
  }

  delayedShowMarker(){
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 500)
  }


  handleMarkerClick(){
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  addItem(){

    console.log(" this is addItem: ")
  }

  render() {
    return (

      <div>
      <div>
        <h2> My top component: </h2>
        <button onClick={this.clickListener}> clcik here</button>
          {console.log(this.state.name)}
          {console.log(" at main component: ")}
      </div>
      <div>
        <JobPostList jobs={[{jobName:"Mentor", jobDescription:"HIR at Holacode"},{jobName:"Mentors", jobDescription:"HIR at Holacodes"}]} />
      </div>
      <div>

      </div>
      <div>


    <Mapper
      namex={this.state.name}
      isMarkerShown={this.state.isMarkerShown}
      onMarkerClick={this.handleMarkerClick}

    />
      </div>
      <PostJob addItem={this.addItem}  testin={"testingx:"} />
      </div>
    )
  }
}


ReactDOM.render(<MyFancyComponent />, document.getElementById("root"));
