import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'inline-flex',
    margin: '0 25px',
  },
});

const StyledButton = withStyles({
    root: {
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1rem',
        width: '480px',
        borderRadius: '10px',
        background: '#151515',
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            backgroundColor: '#151515'
        }
      },
})(Button);

const StyledMenuList = withStyles ({
    root: {
        bottom: '-5px',
        background: '#191919',
        color: '#C9C9C9',
        width: '480px',
        borderRadius: '10px 10px 0 0'
    }
})(MenuList);

const StyledMenuItem = withStyles ({
    root: {
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#202020'
        }
    }
})(MenuItem)

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <StyledButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            Accusantium doloremque laudant
            <i className="material-icons">
                keyboard_arrow_up
            </i>
          </StyledButton>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <StyledMenuList>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                      <StyledMenuItem onClick={this.handleClose}>Architecto beatae vitae</StyledMenuItem>
                    </StyledMenuList>
                  </ClickAwayListener>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}
MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MenuListComposition);