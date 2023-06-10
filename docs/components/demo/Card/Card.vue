<template>
  <KCard title="Your Title">
    <h5>Props: </h5>
    <code>title="Your Title"</code>
  </KCard>

  <KCard title="Your Title" :stripe="false">
    <h5>Props: </h5>
    <code>title="Your Title" :stripe="false"</code>
  </KCard>

  <KCard title="Your Title" type="success" titleStyle="inside">
    <h5>Props: </h5>
    <code>title="Your Title" type="success" titleStyle="inside"</code>
  </KCard>

  <KCard title="Your Title" type="warning" :shadow="false" titleStyle="fill">
    <h5>Props: </h5>
    <code>title="Your Title" type="warning" :shadow="false" titleStyle="fill"</code>
  </KCard>

  <KCard :bordered="false" :stripe="false"  color="#ff994b">
    <h5>Props: </h5>
    <code>type="info" :bordered="false"</code>
  </KCard>
</template>