import App from './App.svelte';
import './app.scss';

const app = new App({
	target: document.body,
	props: {
		name: 'Julian'
	}
});

export default app;