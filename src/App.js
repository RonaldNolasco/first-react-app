import React, { Component } from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty as isMyArrayEmpty } from './Utils';

class App extends Component {
  state = {
    showBlogs: true,
    // btnText: 'Hide',
    blogArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      }
    ]
  }

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    // let texto = updatedState ? 'Hide' : 'Show';

    // this.setState({
    //   showBlogs: updatedState,
    //   btnText: texto
    // })
    this.setState((prevState, prevProps) => {
      return {
        showBlogs: !prevState.showBlogs,
        // btnText: texto
      }
    });

    // console.log(this.state.showBlogs);
  }

  onLikeBtnClick = (pos) => {
    // alert('Like Button Clicked at pos => ' + pos);
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({
      blogArr: updatedBlogList
    });

    // console.log(updatedBlogObj)
  }


  render() {
    console.log('Render Called');
    // console.log(this.state)
  
    const blogCards = isMyArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
      )
    })


    return (
      <div className="App">
  
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br />
  
        {
          this.state.showBlogs ? blogCards : null
        }
  
      </div>
    );
  }
}

export default App;
