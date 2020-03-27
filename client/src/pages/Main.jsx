import React from 'react';
import { cn } from '@bem-react/classname';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer/Footer';
import { Button } from 'components/Button/Button';
import { Icon } from 'components/Icon/Icon';
import { Logo } from 'components/Logo/Logo';

const classes = cn('Page');

const MainPage = () => {
  return (
    <div className={classes()}>
      <Header title='School CI server'>
        <Button
          text='Settings'
          color='secondary'
          icon={<Icon type='settings' />}
        />
      </Header>
      <main className={classes('Main')}>
        <div className={classes('CenterContainer')}>
          <Logo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { MainPage };
