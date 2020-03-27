import React, { memo } from 'react';
import { cn } from '@bem-react/classname';

import { Icon } from 'components/Icon';
import { Button } from 'components/Button';

const classes = cn('Logo');

const Logo = memo(() => (
  <div className={classes()}>
    <Icon type='logo' />
    <p className={classes('Text')}>
      Configure repository connection and synchronization settings
    </p>
    <Button text='Open settings' color='primary' />
  </div>
));

export { Logo };
