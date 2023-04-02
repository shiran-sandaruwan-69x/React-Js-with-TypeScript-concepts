import React from 'react';
import {fetchPost} from "../actions/PostAction";

// ita passe action eka create kara ganna pahala deka one wenawa
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

interface MyProps{
    fetchPost:()=> void
}
class ButtonComponent extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.props.fetchPost()}}>click me</button>
            </div>
        );
    }
}

// 2 nd step function ekak hada gannawa action ekata
const matchDispatchToProps=(dispatch:any)=>{
    // 3 rd step action eka create kara gnnawa
    return bindActionCreators({fetchPost:fetchPost},dispatch)
}

// 4 th step eke connect method ekata action eka pass karanawa
// connect method ekara para meter 2 kak illanawa ekak uda function eka
export default connect(null,matchDispatchToProps)(ButtonComponent);