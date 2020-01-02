
import { withStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

export const TypeChip = withStyles({
  root: {
    backgroundColor: '#FFCA04',
    color: '#333333',
    width: 100
  }
})(Chip);