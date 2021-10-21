import React { Component } from "react";
import { Icon } from 'antd';
import './style.css';
import { Component } from 'react';

export default class ExampleCss extends Component {
    constructor(props) {
       super(props);
       this.wrapperRef = React.createRef();
    }
    handleClick() {
       const wrapper = this.wrapperRef.current;
       wrapper.classList.toggle('is-nav-open')
    }

    render() {
      return (
          <div ref={this.wrapperRef} className="wrapper">
            <div className="nav">
                <Icon
                className="nav__icon"
                type="menu-fold"
                onClick={() => this.handleClick()}
                />
                <div className="nav__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae duclmus est laudantium libero nam omnis optio repellat
                    sit unde voluptatum?
                </div>
            </div>
          </div>
      )
    }
}
// export default class Home2 extends React.Component{
//     constructor(props) {
//       super(props);
//       this.anim = new Animated.Value(0)
//     }
  
//     startAnim(){
//       this.anim.setValue(0)
//       Animated.spring(this.anim, {
//         toValue:1,
//         useNativeDriver:false
//       }).start()
//     }
  
//     render() {
//       const animated = this.anim.interpolate({
//         inputRange:[0, 1],
//         outputRange:['80deg', '0deg']
//       })
//       return(
//         <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
//           <Animated.View style={{width:100, height:100, backgroundColor:'white', transform:[{rotateY:animated}]}}/>
//           <Button
//             onPress={() => {
//               this.startAnim()
//             }}
//             title="Start"
//           />
//         </View>
//       )
//     }
//   }