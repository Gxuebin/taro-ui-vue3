<template>
  <page
    class="page"
    header-title="Steps 步骤条"
  >
    <panel
      class="panel__content"
      title="基础用法"
    >
      <example-item>
        <at-steps
          :items="items1"
          :current="current1"
          @change="onChange('current1')"
        ></at-steps>
        <at-steps
          :items="items2"
          :current="current2"
          @change="onChange('current2')"
        ></at-steps>
      </example-item>
    </panel>
    <panel
      class="panel__content"
      title="带附加信息"
    >
      <example-item>
        <at-steps
          :items="items3"
          :current="current3"
          @change="onChange('current3')"
        ></at-steps>
      </example-item>
    </panel>
    <panel
      class="panel__content"
      title="自定义图标"
    >
      <example-item>
        <at-steps
          :items="items4"
          :current="current4"
          @change="onChange('current4')"
        ></at-steps>
      </example-item>
    </panel>
    <panel
      class="panel__content"
      title="状态步骤条"
    >
      <example-item>
        <at-steps
          :items="items5"
          :current="current5"
          @change="onChange('current5')"
        ></at-steps>
      </example-item>
    </panel>
  </page>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { Item } from 'types/steps'
import './index.scss'

interface TimelinePageState {
  [key: string]: number
}

export default defineComponent({
  name: "StepsDemo",

  setup() {

    const state = reactive<TimelinePageState>({
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1
    })

    const items1 = ref<Item[]>([{ title: '步骤一' }, { title: '步骤二' }])

    const items2 = ref<Item[]>([
      { title: '步骤一' },
      { title: '步骤二' },
      { title: '步骤三' }
    ])

    const items3 = ref<Item[]>([
      { title: '步骤一', desc: '这里是额外的信息，最多两行' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行' }
    ])

    const items4 = ref<Item[]>([
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      }
    ])

    const items5 = ref<Item[]>([
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        status: 'success'
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行'
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        status: 'error'
      }
    ])

    function onChange(stateName: string, current: number): void {
      state[stateName] = current
    }

    return {
      ...toRefs(state),
      item1,
      item2,
      item3,
      item4,
      item5,
      onChange
    }
  }
})
</script>