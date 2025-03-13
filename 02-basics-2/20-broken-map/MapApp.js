import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)
    const refPin = ref(null)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {      
      x.value = event.offsetX
      y.value = event.offsetY
    }

    // Следим за X и Y для установки нового положения
    watch([x, y], () => {
      // Находим метку и изменяем её положение
      refPin.value.style.left = `${x.value}px`
      refPin.value.style.top = `${y.value}px`
    })


    return {
      refPin,
      handleClick,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span ref="refPin" class="pin">📍</span>
    </div>
  `,
})
