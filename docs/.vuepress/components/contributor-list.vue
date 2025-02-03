<script setup></script>
<template>
    <div class="contributors-container">
        <div class="contributor-card full-width">
            <img src="https://avatars.githubusercontent.com/u/96456728?v=4" alt="Zorua Fox" class="contributor-avatar">
            <div class="contributor-info">
                <p class="contributor-name"><a href="https://github.com/ZoruaFox" target="_blank">Zorua Fox</a></p>
                <p class="contributor-role">总策划</p>
            </div>
        </div>
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/45301993?&v=4" alt="Contributor 2"
                class="contributor-avatar">
            <div class="contributor-info">
                <p class="contributor-name"><a href="https://github.com/BaigeiGu" target="_blank">未白</a></p>
                <p class="contributor-role">文档编写、样式设计</p>
            </div>
        </div>
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/75785656?&v=4" alt="Contributor 3"
                class="contributor-avatar">
            <div class="contributor-info">
                <p class="contributor-name"><a href="https://github.com/luobi125" target="_blank">罗比</a></p>
                <p class="contributor-role">文档编写</p>
            </div>
        </div>
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/69202360?&v=4" alt="Contributor 4"
                class="contributor-avatar">
            <div class="contributor-info">
                <p class="contributor-name"><a href="https://github.com/RegadPoleCN" target="_blank">RegadPoleCN</a></p>
                <p class="contributor-role">文档编写</p>
            </div>
        </div>
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/126956027?&v=4" alt="Contributor 5"
                class="contributor-avatar">
            <div class="contributor-info">
                <p class="contributor-name"><a href="https://github.com/BasicMirror268" target="_blank">淩墟</a></p>
                <p class="contributor-role">文档编写</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.contributors-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
}

.contributor-card {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;
}

.contributor-card.full-width {
    flex: 1 1 100%;
}

.contributor-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 16px;
}

.contributor-info {
    display: flex;
    flex-direction: column;
}

.contributor-name {
    font-weight: bold;
}

.contributor-name a {
    text-decoration: none;
    color: inherit;
}

.contributor-role {
    color: #666;
}

</style>