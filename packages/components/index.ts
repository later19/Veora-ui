import components from './src';

export * from './src';

export default {
    install: (app: any) => components.forEach(c => app.use(c)),
};
