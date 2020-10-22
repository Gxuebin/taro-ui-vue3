import { h, defineComponent, reactive } from 'vue'
import { AtButton, AtCurtain } from 'taro-ui-vue3'
import { Image, Text } from '@tarojs/components'
import curtainPng from '@/assets/images/curtain.png'
import { Page, Panel, ExampleItem } from '@/components/index'
import './index.scss'

interface TagPageState {
  isOpened: boolean
  closeBtnPosition:
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  [key: string]: string | boolean
}

export default defineComponent({

  setup() {

    const state = reactive<TagPageState>({
      isOpened: false,
      closeBtnPosition: 'bottom'
    })

    function handleChange(stateName: string, value: string): void {
      state.isOpened = true
      state[stateName] = value
    }

    function onClose(): void {
      state.isOpened = false
    }

    return () => {
      const { isOpened, closeBtnPosition } = state

      return (
        h(Page, { headerTitle: 'Curtain 幕帘' }, {
          extra: () => [
            h(AtCurtain, {
              isOpened: isOpened,
              closeBtnPosition: closeBtnPosition,
              onClose: onClose.bind(this),
            }, {
              default: () => [
                h(Image, { style: 'width:100%', mode: 'widthFix', src: curtainPng })
              ]
            })
          ],
          default: () => [
            /* 顶部关闭*/
            h(Panel, { title: '顶部关闭' }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'top'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '顶部关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 底部关闭*/
            h(Panel, { title: '底部关闭', }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'bottom'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '底部关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 左上关闭*/
            h(Panel, { title: '左上关闭', }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'top-left'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '左上关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 右上关闭*/
            h(Panel, { title: '右上关闭', }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'top-right'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '右上关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 左下关闭*/
            h(Panel, { title: '左下关闭', }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'bottom-left'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '左下关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),

            /* 右下关闭*/
            h(Panel, { title: '右下关闭', }, {
              default: () => [
                h(ExampleItem, null, {
                  default: () => [
                    h(AtButton, {
                      onClick: handleChange.bind(
                        this,
                        'closeBtnPosition',
                        'bottom-right'
                      )
                    }, {
                      default: () => [
                        h(Text, null, '右下关闭幕帘')
                      ]
                    })
                  ]
                })
              ]
            }),
          ]
        }
        )
      )
    }
  }
})