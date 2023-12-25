import { defineConfig } from "umi";
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
    routes: routes,
    npmClient: 'npm',
    proxy: proxy['dev'],
});
