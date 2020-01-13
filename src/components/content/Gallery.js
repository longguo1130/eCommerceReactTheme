import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import GalleryItem from './GalleryItem.js';
import { connect } from 'react-redux';

const mapStatetoProps =  (state) =>{
    const posts = state.posts;
    return posts;
}
class Gallery extends Component {
    constructor(props) {
        super(props);
    }   
    
    render() {

        const postList = this.props.posts.map((item,key)=>{
  
           return (
                <GalleryItem key={key} image={item.postImageLink} date={item.postDate} title={item.postTitle} link={item.postLink} />
            );
        });
    
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