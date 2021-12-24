import preval from 'preval.macro';
import theRoutes from './get-routes';

// const routes = preval(theRoutes);

export default preval(theRoutes());
