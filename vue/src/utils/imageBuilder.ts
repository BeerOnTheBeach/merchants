import imageUrlBuilder from "@sanity/image-url";
import type {Image} from "@/types/image";
import type {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";
import {useMerchantStore} from "@/stores/merchant.store";

export class ImageBuilder {
    builder:ImageUrlBuilder;

    constructor() {
        this.builder = imageUrlBuilder({
            projectId: useMerchantStore().projectId,
            dataset: useMerchantStore().dataset,
        })
    }

    getImageUrl(image: Image): ImageUrlBuilder | null {
        return image ? this.builder.image(image) : null;
    }
}

