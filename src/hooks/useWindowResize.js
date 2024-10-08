import { ref, onMounted, onUnmounted } from "vue";

export function useWindowResize() {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)
    const size = ref(window.innerWidth>1920?'large':window.innerWidth>1432?'normal':'small')

    const handleResize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
        size.value = window.innerWidth>1920?'large':window.innerWidth>1432?'normal':'small'
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    })

    return { width, height, size };
}