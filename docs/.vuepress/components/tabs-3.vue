<template>
  <div style="padding-top:16px">
    <g-tabs selected="Tab1">
      <g-tabs-head>
        <g-tabs-item name="Tab1"><g-icon name="ios"></g-icon>Tab 1</g-tabs-item>
        <g-tabs-item name="Tab2"><g-icon name="android"></g-icon>Tab 2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="Tab1">Content 1</g-tabs-pane>
        <g-tabs-pane name="Tab2">Content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
  import GTabs from '../../../src/tabs'
  import GTabsHead from '../../../src/tabs-head'
  import GTabsBody from '../../../src/tabs-body'
  import GTabsItem from '../../../src/tabs-item'
  import GTabsPane from '../../../src/tabs-pane'
  import GIcon from '../../../src/icon'

  export default {
    name:'tabs-1',
    components:{
      'g-tabs': GTabs,
      'g-tabs-head':GTabsHead,
      'g-tabs-body':GTabsBody,
      'g-tabs-item':GTabsItem,
      'g-tabs-pane':GTabsPane,
      'g-icon': GIcon
    }
  }
</script>