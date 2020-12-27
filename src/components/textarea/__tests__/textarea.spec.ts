import { mount } from '@vue/test-utils'
import AtTextarea from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtTextarea as any, {
    slots,
    props: { value: '', onChange: () => { }, ...values },
  })
}

describe('AtTextarea', () => {
  it('should render default AtTextarea', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- value', () => {
    const wrapper = factory({ value: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- maxLength', () => {
    const wrapper = factory({ maxLength: 300 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- placeholder', () => {
    const wrapper = factory({ placeholder: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- count', () => {
    const wrapper = factory({ count: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- height', () => {
    const wrapper = factory({ height: 3000 })
    expect(wrapper.vm.height).toBe(3000)
    expect(wrapper.element).toMatchSnapshot()
  })
})
