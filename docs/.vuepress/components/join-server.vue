<script setup></script>
<template>
    <div class="join-card-container">
        <div class="server-info join-card">
            <p class="server-name">服务器信息</p>
            <p class="server-description">地址： mc.zorua.top</p>
            <p class="server-description">版本： 1.21.1</p>
        </div>
        <div class="qq-group join-card">
            <div class="qq-group-title">QQ群</div>
            <p class="qq-group-name">Minecraftの有兽焉</p>
            <p class="qq-group-id">群号： 971327134</p>
            <p class="qq-group-link ">加群链接：<a href="https://jq.qq.com/?_wv=1027&k=EcPiJtYh">点此加群</a></p>
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
.join-card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 24px;

    box-sizing: border-box;
}
.join-card p{
    line-height: 1.2;
}
.server-name, .qq-group-title{
    font-weight: bold;
    font-size: 1.2rem;
}


@media (max-width: 768px) {
    .join-card {
        flex: 1 1 calc(50% - 16px);
    }
}

@media (max-width: 480px) {
    .join-card {
        flex: 1 1 100%;
    }
}
</style>