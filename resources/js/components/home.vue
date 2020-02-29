<template>
    <div class="item">
        <div class="grid">
            <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                style="max-width: 100%;position: inherit;" class="mb-6">
                <b-card-text>
                    <h4 style="font-weight: bold;">Espresso shot</h4>
                </b-card-text>
                <b-button variant="outline-primary"><i class="fa fa-eye" aria-hidden="true"></i> View</b-button>
            </b-card>
            <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                style="max-width: 100%;position: inherit;" class="mb-6">
                <b-card-text>
                    <h4 style="font-weight: bold;">Espresso shot</h4>
                </b-card-text>
                <b-button variant="outline-primary"><i class="fa fa-eye" aria-hidden="true"></i> View</b-button>
            </b-card>
            <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                style="max-width: 100%;position: inherit;" class="mb-6">
                <b-card-text>
                    <h4 style="font-weight: bold;">Espresso shot</h4>
                </b-card-text>
                <b-button variant="outline-primary"><i class="fa fa-eye" aria-hidden="true"></i> View</b-button>
            </b-card>
        </div>
    </div>
</template>
<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 22px;
    }

    @media only screen and (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }

    }

</style>
