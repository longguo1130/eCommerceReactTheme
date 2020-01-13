import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import GalleryItem from './GalleryItem.js';
import { connect } from 'react-redux';

const mapStatetoProps =  (state) =>{
    
    const posts = state.post.posts;
    return {posts};
}
class Gallery extends Component {

    render() {

        const postList = this.props.posts.sort((a, b) =>{
            
            return new Date(a.order) - new Date(b.order);
        }).map((item,key)=>{
  
           return (<GalleryItem key={key} image={item.postImageLink} date={item.postDate} title={item.postTitle} link={item.postLink} />);
        });
        console.log(this.props.posts.sort((a, b) =>{
            
            return new Date(b.postDate) - new Date(a.postDate);
        }))
        return (
            <div className="content-wrapper">
                <Masonry
                    className={'gallery'}
                    elementType={'ul'} 
                    disableImagesLoaded={false} 
                    updateOnEachImageLoad={false}

                >
                    {postList}
                </Masonry>
            </div>
        );
    }
};

export default connect(mapStatetoProps)(Gallery);