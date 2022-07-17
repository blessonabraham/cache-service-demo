import * as dotenv from 'dotenv'
import { App } from './src/App';

dotenv.config()

const port = process.env.SERVER_PORT

const app = App()
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});