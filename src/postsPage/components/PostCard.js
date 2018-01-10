import Reacr, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { withRouter } from 'react-router';

const styles = {
  card: {
    height: 450,
    maxHeight: 450,
    width: 400,
    maxWidth: '100%',
    marginBottom: 32,
    overflow: 'hidden'
  },
  media: {
    height: 194,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  expand: {
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
}

class PostCard extends Component {
  render() {
    const { id, classes, title, timestamp, shortDescri, cover } = this.props;
    return (
      <div style={{maxWidth: '100%'}}>
        <Card className={classes.card}>
          <CardHeader
            onClick={() => this.props.history.push(`/${this.props.match.params.category}/${id}`)}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={timestamp}
          />
          <CardMedia
            className={classes.media}
            image={`${cover}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {shortDescri}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(PostCard));
