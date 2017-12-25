import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div>
          <h1 style={{fontSize: '42px', lineHeight: '1.2', fontWeight: 'bold'}}>
            The strength of the wolf is the pack
          </h1>
          <p style={{fontSize: '18px'}}>
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '32px 0px', color: 'rgba(255,255,255,0.4)'}}>
          <div>
            blastz
          </div>
          <div>
            {post.timestamp}
          </div>
        </div>
        <Divider />
        <div style={{padding: '32px 0px'}}>
          <p>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            <br />You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
          </p>
          <p>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            <br />You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
          </p>
          <p>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            <br />You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
          </p>
          <p>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            <br />You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
          </p>
          <p>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            <br />You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
          </p>
        </div>
      </div>
    )
  }
}

export default Post;
