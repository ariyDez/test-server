import assert from 'assert';
import app from '../../src/app';

describe('\'student\' service', () => {
  it('registered the service', () => {
    const service = app.service('student');

    assert.ok(service, 'Registered the service');
  });
});
