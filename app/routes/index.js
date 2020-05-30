import userRoute from './user';

export default (app) => {
    app.use('/users', userRoute)
};
