<template>
    <div class="wrapper">

        <main class="map-content">
    
           
                <iframe id="inlineFrameExample" title="Inline Frame Example" width="1280" height="720"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                </iframe>
    
                <a href="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"><h2>Iframe link</h2></a>
            </main>
    
        
    </div>
</template>

<style scoped>
a{
    all: unset;
    cursor: pointer;
    
}
main
h2{
    height: auto;
    margin-top: 3%;
    width: fit-content;
    text-align: center;
    border-radius: 5px;
    background-color: var(--btn-color);
}
.wrapper{
    width:100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.map-content{
    margin-top: 5%;
}

</style>