export { default as ControlsMenuToggle } from '../../components/Controls/MenuToggle.vue'
export { default as ControlsThemeToggle } from '../../components/Controls/ThemeToggle.vue'
export { default as IconsDark } from '../../components/Icons/Dark.vue'
export { default as IconsEnvelope } from '../../components/Icons/Envelope.vue'
export { default as IconsExternalLink } from '../../components/Icons/ExternalLink.vue'
export { default as IconsFacebook } from '../../components/Icons/Facebook.vue'
export { default as IconsGitHub } from '../../components/Icons/GitHub.vue'
export { default as IconsLight } from '../../components/Icons/Light.vue'
export { default as IconsLinkedIn } from '../../components/Icons/LinkedIn.vue'
export { default as IconsLogo } from '../../components/Icons/Logo.vue'
export { default as IconsMedium } from '../../components/Icons/Medium.vue'
export { default as IconsTimes } from '../../components/Icons/Times.vue'
export { default as IconsTwitter } from '../../components/Icons/Twitter.vue'
export { default as IconsYouTube } from '../../components/Icons/YouTube.vue'
export { default as NavigationEmailHandle } from '../../components/Navigation/EmailHandle.vue'
export { default as NavigationMobileMenu } from '../../components/Navigation/MobileMenu.vue'
export { default as NavigationNavMenu } from '../../components/Navigation/NavMenu.vue'
export { default as NavigationNavbar } from '../../components/Navigation/Navbar.vue'
export { default as NavigationSocialHandles } from '../../components/Navigation/SocialHandles.vue'
export { default as SectionsAbout } from '../../components/Sections/About.vue'
export { default as SectionsExperience } from '../../components/Sections/Experience.vue'
export { default as SectionsFooter } from '../../components/Sections/Footer.vue'
export { default as SectionsHeader } from '../../components/Sections/Header.vue'
export { default as SectionsProject } from '../../components/Sections/Project.vue'
export { default as SectionsSkill } from '../../components/Sections/Skill.vue'
export { default as WidgetsModal } from '../../components/Widgets/Modal.vue'

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
