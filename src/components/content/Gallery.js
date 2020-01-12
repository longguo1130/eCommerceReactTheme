import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import GalleryItem from './GalleryItem.js'

class Gallery extends Component {
    constructor(props) {
        super(props);
    }   
    
    render() {

        const posts = this.props.posts.map((item,key)=>{
            console.log(item)
           return (
                <GalleryItem key={key} image={item.postImageLink} date={item.postDate} title={item.postTitle} link={item.postLink} />
            );
        });
    
        return (
            <div className="content-wrapper">
                <Masonry
                    className={'gallery'} // default ''
                    elementType={'ul'} // default 'div'
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false

                >
                    {posts}
                </Masonry>
            </div>
        );
    }
};

export default Gallery;