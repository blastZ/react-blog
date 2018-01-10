import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { withRouter } from 'react-router-dom';

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
  },
  textRoot: {
    marginBottom: '24px'
  },
  captionRoot: {
    marginBottom: '24px'
  }
}

class Post extends Component {
  state = {
    content: []
  }

  componentDidMount() {
    const { category, postId } = this.props.match.params;
    fetch(`http://localhost:5001/${category}/${postId}`)
      .then((res) => (res.json()))
      .then((result) => {
        this.setState({
          content: result
        })
      })
  }

  render() {
    const { content } = this.state;
    const { post, classes } = this.props;
    return (
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{marginTop: '64px'}}>
          <Typography type="display2" align="center">
            {post.title}
          </Typography>
        </div>
        <div style={{margin: '32px 0px'}}>
          <Typography type="subheading" align="left">
             {post.shortDescri}
          </Typography>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.authorInfoContainer}>
            <div className={classes.authorInfoLeft}>
              <Avatar alt="avatar" src={post.avatar} className={classes.avatar} />
            </div>
            <div className={classes.authorInfoRight}>
              <div><Typography type="title">
                {post.author}
              </Typography></div>
              <div><Typography type="subheading" style={{marginTop: '5px', color: 'rgb(171, 171, 171)'}}>
                June 07, 2016
              </Typography></div>
            </div>
          </div>
          {post.reproduce && <div className={classes.otherInfoContainer}>
            <Typography type="subheading" align="center" noWrap={true}>
              <em>转载自<span style={{color: 'rgb(171, 171, 171)', marginLeft: '13px'}}>Alist Apart</span></em>
            </Typography>
            <Typography type="body2" align="center">
              <a href={post.origin}>查看原文</a>
            </Typography>
          </div>}
          {!post.reproduce && <div className={classes.otherInfoContainer}>
            <Typography type="subheading" align="center" noWrap={true}>
              <em><span style={{color: 'rgb(171, 171, 171)', marginLeft: '13px'}}>原创文章</span></em>
            </Typography>
            <Typography type="body2" align="center" noWrap={true}>
              <a href={post.origin}>转载请注明出处</a>
            </Typography>
          </div>}
        </div>
        <Divider />
        <div style={{padding: '32px 0px'}}>
          {content.map((item) => {
            switch (item.type) {
              case 'headline': return (
                <Caption classes={classes}>
                  {item.value}
                </Caption>
              )
              case 'body': return (
                <Text classes={classes}>
                  {item.value}
                </Text>
              )
              case 'code': return (
                <Text classes={classes}>
                  <pre><code>{item.value}</code></pre>
                </Text>
              )
              default: return (
                <Text classes={classes}>
                  {item.value}
                </Text>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

const Caption = ({ classes, children }) => (
  <Typography type="headline" align="left" classes={{
    root: classes.captionRoot
  }}>
    {children}
  </Typography>
)

const Text = ({ classes, children }) => (
  <Typography type="subheading" align="left" classes={{
    root: classes.textRoot
  }}>
    {children}
  </Typography>
)

export default withStyles(styles)(withRouter(Post));
