export const ControlsMenuToggle = () => import('../../components/Controls/MenuToggle.vue' /* webpackChunkName: "components/controls-menu-toggle" */).then(c => wrapFunctional(c.default || c))
export const ControlsThemeToggle = () => import('../../components/Controls/ThemeToggle.vue' /* webpackChunkName: "components/controls-theme-toggle" */).then(c => wrapFunctional(c.default || c))
export const IconsDark = () => import('../../components/Icons/Dark.vue' /* webpackChunkName: "components/icons-dark" */).then(c => wrapFunctional(c.default || c))
export const IconsEnvelope = () => import('../../components/Icons/Envelope.vue' /* webpackChunkName: "components/icons-envelope" */).then(c => wrapFunctional(c.default || c))
export const IconsExternalLink = () => import('../../components/Icons/ExternalLink.vue' /* webpackChunkName: "components/icons-external-link" */).then(c => wrapFunctional(c.default || c))
export const IconsFacebook = () => import('../../components/Icons/Facebook.vue' /* webpackChunkName: "components/icons-facebook" */).then(c => wrapFunctional(c.default || c))
export const IconsGitHub = () => import('../../components/Icons/GitHub.vue' /* webpackChunkName: "components/icons-git-hub" */).then(c => wrapFunctional(c.default || c))
export const IconsLight = () => import('../../components/Icons/Light.vue' /* webpackChunkName: "components/icons-light" */).then(c => wrapFunctional(c.default || c))
export const IconsLinkedIn = () => import('../../components/Icons/LinkedIn.vue' /* webpackChunkName: "components/icons-linked-in" */).then(c => wrapFunctional(c.default || c))
export const IconsLogo = () => import('../../components/Icons/Logo.vue' /* webpackChunkName: "components/icons-logo" */).then(c => wrapFunctional(c.default || c))
export const IconsMedium = () => import('../../components/Icons/Medium.vue' /* webpackChunkName: "components/icons-medium" */).then(c => wrapFunctional(c.default || c))
export const IconsTimes = () => import('../../components/Icons/Times.vue' /* webpackChunkName: "components/icons-times" */).then(c => wrapFunctional(c.default || c))
export const IconsTwitter = () => import('../../components/Icons/Twitter.vue' /* webpackChunkName: "components/icons-twitter" */).then(c => wrapFunctional(c.default || c))
export const IconsYouTube = () => import('../../components/Icons/YouTube.vue' /* webpackChunkName: "components/icons-you-tube" */).then(c => wrapFunctional(c.default || c))
export const NavigationEmailHandle = () => import('../../components/Navigation/EmailHandle.vue' /* webpackChunkName: "components/navigation-email-handle" */).then(c => wrapFunctional(c.default || c))
export const NavigationMobileMenu = () => import('../../components/Navigation/MobileMenu.vue' /* webpackChunkName: "components/navigation-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const NavigationNavMenu = () => import('../../components/Navigation/NavMenu.vue' /* webpackChunkName: "components/navigation-nav-menu" */).then(c => wrapFunctional(c.default || c))
export const NavigationNavbar = () => import('../../components/Navigation/Navbar.vue' /* webpackChunkName: "components/navigation-navbar" */).then(c => wrapFunctional(c.default || c))
export const NavigationSocialHandles = () => import('../../components/Navigation/SocialHandles.vue' /* webpackChunkName: "components/navigation-social-handles" */).then(c => wrapFunctional(c.default || c))
export const SectionsAbout = () => import('../../components/Sections/About.vue' /* webpackChunkName: "components/sections-about" */).then(c => wrapFunctional(c.default || c))
export const SectionsContact = () => import('../../components/Sections/Contact.vue' /* webpackChunkName: "components/sections-contact" */).then(c => wrapFunctional(c.default || c))
export const SectionsExperience = () => import('../../components/Sections/Experience.vue' /* webpackChunkName: "components/sections-experience" */).then(c => wrapFunctional(c.default || c))
export const SectionsFooter = () => import('../../components/Sections/Footer.vue' /* webpackChunkName: "components/sections-footer" */).then(c => wrapFunctional(c.default || c))
export const SectionsHeader = () => import('../../components/Sections/Header.vue' /* webpackChunkName: "components/sections-header" */).then(c => wrapFunctional(c.default || c))
export const SectionsProject = () => import('../../components/Sections/Project.vue' /* webpackChunkName: "components/sections-project" */).then(c => wrapFunctional(c.default || c))
export const SectionsSkill = () => import('../../components/Sections/Skill.vue' /* webpackChunkName: "components/sections-skill" */).then(c => wrapFunctional(c.default || c))
export const WidgetsModal = () => import('../../components/Widgets/Modal.vue' /* webpackChunkName: "components/widgets-modal" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
