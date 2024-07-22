export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" @click="onProcessing" :disabled="processing"><slot /></button>
    `,
    data() {
        return {
            processing: false
        }
    },
    methods: {
        onProcessing() {
            this.processing = true;
            setTimeout(() => {
                this.processing = false
            }, 500);
        }
    }
}