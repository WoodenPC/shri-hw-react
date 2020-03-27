import React from 'react';
import { cn } from '@bem-react/classname';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { List } from 'components/List';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Card } from 'components/Card';

const classes = cn('Page');

const BuildHistoryPage = () => {
  return (
    <div className={classes()}>
      <Header title='philip1967/my-awesome-repo' color='black'>
        <Button
          text='Run build'
          icon={<Icon type='play' />}
          color='secondary'
        />
        <Button icon={<Icon type='settings' />} color='secondary' />
      </Header>
      <main className={classes('Main')}>
        <List>
          <List.Item>
            <Card
              status='fail'
              commitNumber={1368}
              title='add documentation for postgres scaler'
              branch='master'
              hash='9c9f0b9'
              who='Philip Kirkorov'
              time={{
                startTime: '21 янв, 03:06',
                duration: '1 ч 20 мин',
              }}
            />
          </List.Item>
        </List>
      </main>
      <Footer />
    </div>
  );
};

export { BuildHistoryPage };
