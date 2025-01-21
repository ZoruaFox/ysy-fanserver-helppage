<script setup>

const copyContent = async (text) => {
    await navigator.clipboard.writeText(text)
    alert('已复制到剪贴板')
}
</script>
<template>
    <div class="join-card-container">
        <div class="server-info join-card">
            <p class="server-name">服务器信息</p>
            <p class="server-description">
                地址：<code><span class="copyable" @click="copyContent">mc.zorua.top</span></code></p>
            <p class="server-description">版本： 1.21.1</p>
            <p class="server-notice">需进群加入白名单</p>
        </div>
        <div class="qq-group join-card">
            <div class="qq-group-title">QQ群</div>
            <p class="qq-group-name">名称：Minecraftの有兽焉</p>
            <p class="qq-group-id">群号： 971327134</p>
            <a class="route-link auto-link vp-hero-action primary no-external-link-icon"
                href="https://jq.qq.com/?_wv=1027&k=EcPiJtYh">点此加群</a>
        </div>
    </div>
</template>
<style lang="css" scoped>
.join-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
}

.join-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #ddd;

    padding: 1.5em;
    flex: 1;
    box-sizing: border-box;

    margin-block: .75rem;
    border-radius: .5em;
}

.join-card p {
    line-height: 1.2;
}

.server-name,
.qq-group-title {
    font-weight: bold;
    font-size: 1.5rem;
}
</style>