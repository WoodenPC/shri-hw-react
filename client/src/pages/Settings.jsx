import React from 'react';
import { cn } from '@bem-react/classname';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Button } from 'components/Button/Button';
import { Form } from 'components/Form/Form';
import { Input } from 'components/Input/Input';

const classes = cn('Page');

const SettingsPage = () => {
  return (
    <div className={classes()}>
      <Header title='Scool CI server' />
      <main className={classes('Main')}>
        <Form>
          <Form.Header
            title='Settings'
            description='Configure repository connection and synchronization settings.'
          />
          <Form.Fields>
            <Form.Field name='repository' label='GitHub repository' required>
              <Input placeholder='user-name/repo-name' />
            </Form.Field>
            <Form.Field name='command' label='Build command'>
              <Input placeholder='npm ci && npm run build' />
            </Form.Field>
            <Form.Field name='mainBranch' label='Main branch'>
              <Input placeholder='master' />
            </Form.Field>
            <Form.Field
              name='timing'
              label='Synchronize every'
              suffix='minutes'
              row
            >
              <Input value={10} type='number' short />
            </Form.Field>
          </Form.Fields>
          <Form.Footer>
            <Button text='Save' color='primary' size='big' />
            <Button text='Cancel' color='secondary' size='big' />
          </Form.Footer>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export { SettingsPage };