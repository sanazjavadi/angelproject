import CartLayout from './cart'

describe('@layouts/cart', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(CartLayout, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
