import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Explore from './views/Explore.vue'
import NotFound from './views/NotFound.vue'

// Projects
import LinkPlus from './views/projects/linkplus.vue'
import Spotivity from './views/projects/spotivity.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects
	},
	{
		path: '/explore',
		meta: { title: 'Explore' },
		component: Explore
	},
	{
		path: '/projects/linkplus',
		meta: { title: 'LinkPlusAI' },
		component: LinkPlus
	},
	{
		path: '/notion',
		meta: { title: 'Spotivity' },
		component: Spotivity
	},
	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
