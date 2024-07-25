import ClickButton from "./ClickButton.js"
export default {
    components: { ClickButton },
    template: `
        <div class="flex space-x-3 mt-4">
            <ClickButton :isVisible="true" :canDisable="false">< Previous</ClickButton>
            <ClickButton :isVisible="true" :canDisable="false">Next ></ClickButton>
        </div>
    `
}