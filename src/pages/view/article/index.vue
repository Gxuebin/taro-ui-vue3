<template>
  <page header-title="Article 文章">
    <panel
      title="示例"
      no-padding
    >
      <view class="at-article">
        <view class="at-article__h1">
          这是一级标题这是一级标题
        </view>
        <view class="at-article__info">
          2017 - 05 - 07 &nbsp;&nbsp;&nbsp; 这是作者
        </view>
        <view class="at-article__content">
          <view class="at-article__section">
            <view class="at-article__h2">
              这是二级标题
            </view>
            <view class="at-article__h3">
              这是三级标题
            </view>
            <view class="at-article__p">
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </view>
            <view class="at-article__p">
              这是文本段落。这是文本段落。
            </view>
            <image
              class="at-article__img"
              src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"
              mode="widthFix"
            />
          </view>
          <view class="at-article__section">
            <view class="at-article__h2">这是二级标题</view>
            <view class="at-article__h3">这是三级标题</view>
            <view class="at-article__p">
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </view>
            <image
              class="at-article__img"
              src="https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg"
              mode="widthFix"
            />
          </view>
        </view>
      </view>
    </panel>
  </page>
</template>

<script lang="ts">
import './index.scss'

export default defineComponent({
  name: "ArticleDemo"
})
</script>