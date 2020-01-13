<template>
  <div>
    <button @click="$emit('upload')">Emit upload event</button>
    <button @click="$emit('error')">Emit error event</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>