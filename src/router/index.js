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
                    // Cool Indigo (clean, premium)
                    bg: '#EEF2FF',
                    panel: '#FFFFFF',
                    text: '#0B1220',
                    muted: '#44506A',
                    accent: '#4F46E5', // indigo
                    accent2: '#22C55E', // green pop
                },
            },
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                theme: {
                    // Mint / Teal (fresh, different)
                    bg: '#ECFDF5',
                    panel: '#F8FFFC',
                    text: '#052016',
                    muted: '#2F5C4B',
                    accent: '#0F766E', // teal
                    accent2: '#06B6D4', // cyan
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
                    // Warm Amber (stands out)
                    bg: '#FFFBEB',
                    panel: '#FFF7ED',
                    text: '#1F1307',
                    muted: '#6A4B2A',
                    accent: '#F59E0B', // amber
                    accent2: '#EF4444', // red accent
                },
            },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                theme: {
                    // Lavender / Violet (soft but distinct)
                    bg: '#F5F3FF',
                    panel: '#FBFAFF',
                    text: '#151335',
                    muted: '#4E4A7A',
                    accent: '#7C3AED', // violet
                    accent2: '#F97316', // orange pop
                },
            },
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                theme: {
                    // Rose (clearly different)
                    bg: '#FFF1F5',
                    panel: '#FFF8FB',
                    text: '#2A0B12',
                    muted: '#7A3A4A',
                    accent: '#E11D48', // rose
                    accent2: '#2563EB', // blue contrast
                },
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound,
            meta: {
                theme: {
                    bg: '#F3F4F6',
                    panel: '#FFFFFF',
                    text: '#111827',
                    muted: '#6B7280',
                    accent: '#111827',
                    accent2: '#9CA3AF',
                },
            },
        },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})
