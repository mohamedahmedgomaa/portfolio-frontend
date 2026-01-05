import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Projects = () => import('../pages/Projects.vue')
const ProjectDetails = () => import('../pages/ProjectDetails.vue')
const About = () => import('../pages/About.vue')
const Contact = () => import('../pages/Contact.vue')
const NotFound = () => import('../pages/NotFound.vue')

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                theme: {
                    bg: '#F4F8FF',
                    panel: '#FFFFFF',
                    text: '#0B1220',
                    muted: '#46556B',
                    accent: '#6D28D9', // purple
                    accent2: '#22C55E', // green
                },
            },
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                theme: {
                    bg: '#F6FFFB',
                    panel: '#FFFFFF',
                    text: '#061A12',
                    muted: '#3B5B50',
                    accent: '#0EA5E9', // sky
                    accent2: '#10B981', // emerald
                },
            },
        },
        {
            path: '/projects/:slug',
            name: 'project-details',
            component: ProjectDetails,
            props: true,
            meta: {
                theme: {
                    bg: '#FFF7ED',
                    panel: '#FFFFFF',
                    text: '#1A120B',
                    muted: '#6B4F3A',
                    accent: '#F97316', // orange
                    accent2: '#A855F7', // purple
                },
            },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                theme: {
                    bg: '#F7F7FF',
                    panel: '#FFFFFF',
                    text: '#111236',
                    muted: '#4B4E7A',
                    accent: '#2563EB', // blue
                    accent2: '#EC4899', // pink
                },
            },
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                theme: {
                    bg: '#FFF1F2',
                    panel: '#FFFFFF',
                    text: '#2A0B12',
                    muted: '#7A3A4A',
                    accent: '#DB2777', // pink
                    accent2: '#8B5CF6', // violet
                },
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound,
            meta: {
                theme: {
                    bg: '#F5F5F5',
                    panel: '#FFFFFF',
                    text: '#111111',
                    muted: '#555555',
                    accent: '#111111',
                    accent2: '#999999',
                },
            },
        },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})
