import React from 'react';
import PropTypes from 'prop-types';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import { TypeChip } from './styles'

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    width: 500
  },
}));

function Pop({ text, description }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <TypeChip
        size="small"
        label={description}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >

        <Typography variant="h6">
          {description}
        </Typography>
        <Divider />
        <Typography align="justify">
          {text}
        </Typography>
      </Popover>
    </div>
  );
}

Pop.propTypes = {
  description: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Pop.defaultProps = {
  text:
    'Silvio Santos Ipsum Vem pra lá, mah você vai pra cá. Agora vai, agora vem pra láamm. Você veio da caravana de ondeammm? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Estamos em ritmo de festamm. Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. Ma vale dérreaisam? Mah ooooee vem pra cá. Vem pra cá.',
};

export default Pop;
