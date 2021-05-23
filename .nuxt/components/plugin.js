import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  ControlsMenuToggle: () => import('../../components/Controls/MenuToggle.vue' /* webpackChunkName: "components/controls-menu-toggle" */).then(c => wrapFunctional(c.default || c)),
  ControlsThemeToggle: () => import('../../components/Controls/ThemeToggle.vue' /* webpackChunkName: "components/controls-theme-toggle" */).then(c => wrapFunctional(c.default || c)),
  IconsDark: () => import('../../components/Icons/Dark.vue' /* webpackChunkName: "components/icons-dark" */).then(c => wrapFunctional(c.default || c)),
  IconsEnvelope: () => import('../../components/Icons/Envelope.vue' /* webpackChunkName: "components/icons-envelope" */).then(c => wrapFunctional(c.default || c)),
  IconsExternalLink: () => import('../../components/Icons/ExternalLink.vue' /* webpackChunkName: "components/icons-external-link" */).then(c => wrapFunctional(c.default || c)),
  IconsFacebook: () => import('../../components/Icons/Facebook.vue' /* webpackChunkName: "components/icons-facebook" */).then(c => wrapFunctional(c.default || c)),
  IconsGitHub: () => import('../../components/Icons/GitHub.vue' /* webpackChunkName: "components/icons-git-hub" */).then(c => wrapFunctional(c.default || c)),
  IconsLight: () => import('../../components/Icons/Light.vue' /* webpackChunkName: "components/icons-light" */).then(c => wrapFunctional(c.default || c)),
  IconsLinkedIn: () => import('../../components/Icons/LinkedIn.vue' /* webpackChunkName: "components/icons-linked-in" */).then(c => wrapFunctional(c.default || c)),
  IconsLogo: () => import('../../components/Icons/Logo.vue' /* webpackChunkName: "components/icons-logo" */).then(c => wrapFunctional(c.default || c)),
  IconsMedium: () => import('../../components/Icons/Medium.vue' /* webpackChunkName: "components/icons-medium" */).then(c => wrapFunctional(c.default || c)),
  IconsTimes: () => import('../../components/Icons/Times.vue' /* webpackChunkName: "components/icons-times" */).then(c => wrapFunctional(c.default || c)),
  IconsTwitter: () => import('../../components/Icons/Twitter.vue' /* webpackChunkName: "components/icons-twitter" */).then(c => wrapFunctional(c.default || c)),
  IconsYouTube: () => import('../../components/Icons/YouTube.vue' /* webpackChunkName: "components/icons-you-tube" */).then(c => wrapFunctional(c.default || c)),
  SectionsAbout: () => import('../../components/Sections/About.vue' /* webpackChunkName: "components/sections-about" */).then(c => wrapFunctional(c.default || c)),
  SectionsContact: () => import('../../components/Sections/Contact.vue' /* webpackChunkName: "components/sections-contact" */).then(c => wrapFunctional(c.default || c)),
  SectionsExperience: () => import('../../components/Sections/Experience.vue' /* webpackChunkName: "components/sections-experience" */).then(c => wrapFunctional(c.default || c)),
  SectionsFooter: () => import('../../components/Sections/Footer.vue' /* webpackChunkName: "components/sections-footer" */).then(c => wrapFunctional(c.default || c)),
  SectionsHeader: () => import('../../components/Sections/Header.vue' /* webpackChunkName: "components/sections-header" */).then(c => wrapFunctional(c.default || c)),
  SectionsProject: () => import('../../components/Sections/Project.vue' /* webpackChunkName: "components/sections-project" */).then(c => wrapFunctional(c.default || c)),
  SectionsSkill: () => import('../../components/Sections/Skill.vue' /* webpackChunkName: "components/sections-skill" */).then(c => wrapFunctional(c.default || c)),
  NavigationEmailHandle: () => import('../../components/Navigation/EmailHandle.vue' /* webpackChunkName: "components/navigation-email-handle" */).then(c => wrapFunctional(c.default || c)),
  NavigationMobileMenu: () => import('../../components/Navigation/MobileMenu.vue' /* webpackChunkName: "components/navigation-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  NavigationNavMenu: () => import('../../components/Navigation/NavMenu.vue' /* webpackChunkName: "components/navigation-nav-menu" */).then(c => wrapFunctional(c.default || c)),
  NavigationNavbar: () => import('../../components/Navigation/Navbar.vue' /* webpackChunkName: "components/navigation-navbar" */).then(c => wrapFunctional(c.default || c)),
  NavigationSocialHandles: () => import('../../components/Navigation/SocialHandles.vue' /* webpackChunkName: "components/navigation-social-handles" */).then(c => wrapFunctional(c.default || c)),
  WidgetsModal: () => import('../../components/Widgets/Modal.vue' /* webpackChunkName: "components/widgets-modal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
