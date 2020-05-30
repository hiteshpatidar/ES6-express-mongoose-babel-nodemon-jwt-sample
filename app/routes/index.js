import userRoute from "../controllers/userController";
import authRoute from "../controllers/authController";

export default (app) => {
    app.use('/api/users', userRoute)
    app.use('/authenticate', authRoute)
};
