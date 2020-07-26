import HamburgerMenuLayout from './hamburger-menu'

describe('@layouts/hamburger-menu', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(HamburgerMenuLayout, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
