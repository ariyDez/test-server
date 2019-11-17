// Initializes the `student` service on path `/student`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Student } from './student.class';
import createModel from '../../models/student.model';
import hooks from './student.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'student': Student & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/student', new Student(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('student');

  service.hooks(hooks);
}
