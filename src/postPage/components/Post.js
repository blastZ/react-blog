import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  authorInfoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  authorInfoLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px'
  },
  authorInfoRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0px'
  },
  otherInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
}

class Post extends Component {
  render() {
    const { post, classes } = this.props;
    return (
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{marginTop: '64px'}}>
          <Typography type="display2" align="center">
            The Best Request Is No Request, Revisited
          </Typography>
        </div>
        <div style={{margin: '32px 0px'}}>
          <Typography type="subheading" align="left">
            Over the last decade, web performance optimization has been controlled by one indisputable guideline: the best request is no request. A very humble rule, easy to interpret. Every network call for a resource eliminated improves performance. Every src attribute spared, every link element dropped. But everything has changed now that HTTP/2 is available, hasn’t it? Designed for the modern web, HTTP/2 is more efficient in responding to a larger number of requests than its predecessor. So the question is: does the old rule of reducing requests still hold up?
          </Typography>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.authorInfoContainer}>
            <div className={classes.authorInfoLeft}>
              <Avatar alt="avatar" src="https://alistapart.com/d/_made/pix/authors/photos/me_120_120_c1.jpg" className={classes.avatar} />
            </div>
            <div className={classes.authorInfoRight}>
              <div><Typography type="title">
                Stefan Baumgartner
              </Typography></div>
              <div><Typography type="subheading" style={{marginTop: '5px', color: 'rgb(171, 171, 171)'}}>
                November 28, 2017
              </Typography></div>
            </div>
          </div>
          <div className={classes.otherInfoContainer}>
            <Typography type="subheading" align="center" noWrap="true">
              <em>转载自<span style={{color: 'rgb(171, 171, 171)', marginLeft: '13px'}}>Alist Apart</span></em>
            </Typography>
            <Typography type="body2" align="center">
              <a href="https://alistapart.com/article/the-best-request-is-no-request-revisited">查看原文</a>
            </Typography>
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

export default withStyles(styles)(Post);
