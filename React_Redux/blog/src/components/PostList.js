import React from "react";
import {connect} from "react-redux";
import {fetchPosts, fetchPostsandUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component{

    componentDidMount() {
        this.props.fetchPostsandUsers();
   
    }

    renderList(){

        console.log(this.props.users);

        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className = "large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                {post.body}
                            </p>


                        </div>
                        <p>
                            <UserHeader user_id={post.userId} />
                        </p>
                    </div>
                </div>
            );
        });
    }

    render(){
       
        return (
            <div class="ui relaxed divided list">
                
                {this.renderList()}
            </div>
        );
    }
}

//map state to props
const mapStateToProps = (state) =>{
    return {posts: state.posts};
}




//export default connect(null, {fetchPosts: fetchPosts})(PostList);
export default connect(mapStateToProps, 
    {
        fetchPostsandUsers: fetchPostsandUsers
    })(PostList);