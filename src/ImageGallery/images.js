import Works from "../data/Works";
import { Find, SmallPrint, LargePrint, CanvasPrint } from "../data/WorkFunctions.js"

const getCaption = nickname => Find(nickname).caption.toLocaleLowerCase().replace(/[ ]/g, "-")

export const gesturesImages = Works.filter(painting => painting.page.startsWith("/gestures/")).map(
  ({ mosaic, width, height, caption, page }) => ({
    src: mosaic,
    width,
    height,
    alt: caption,
    caption,
    page
  })
);

export const analogFutureImages = Works.filter(painting => painting.page.startsWith("/analog-future/")).map(
  ({ mosaic, width, height, caption, page }) => ({
    src: mosaic,
    width,
    height,
    alt: caption,
    caption,
    page
  })
);

export const apresSkiImages = Works.filter(painting => painting.page.startsWith("/apres-ski/")).map(
  ({ mosaic, width, height, caption, page }) => ({
    src: mosaic,
    width,
    height,
    alt: caption,
    caption,
    page
  })
);

export const availablePaintings = Works.filter(painting => !painting.sold).map(
  ({ mosaic, width, height, caption, price, size, nickname }) => ({
    src: mosaic,
    width,
    height,
    alt: caption,
    caption,
    price,
    size,
    page: `/checkout/${getCaption(nickname)}/original`
  })
);

export const smallPrints = Works.filter(painting => !painting.noprints)
  .map(({ mosaic, width, height, caption, nickname }) => {
    const painting = Find(nickname)
    const print = SmallPrint(painting)
    return ({
      src: mosaic,
      width,
      height,
      alt: caption,
      caption,
      price: print.price,
      size: print.size,
      page: `/checkout/${getCaption(nickname)}/small`
    })
  }
  );

export const largePrints = Works.filter(painting => !painting.noprints)
  .map(({ mosaic, width, height, caption, nickname }) => {
    const painting = Find(nickname)
    const print = LargePrint(painting)
    return ({
      src: mosaic,
      width,
      height,
      alt: caption,
      caption,
      price: print.price,
      size: print.size,
      page: `/checkout/${getCaption(nickname)}/large`
    })
  }
  );

export const canvasPrints = Works.filter(painting => !painting.noprints)
  .map(({ mosaic, width, height, caption, nickname }) => {
    const painting = Find(nickname)
    const print = CanvasPrint(painting)
    return ({
      src: mosaic,
      width,
      height,
      alt: caption,
      caption: caption,
      price: print.price,
      size: print.size,
      page: `/checkout/${getCaption(nickname)}/${print.width}`
    })
  }
  );

export const mosaicImages = Works.map(
  ({ mosaic, caption, width, height, page }) => ({
    src: mosaic,
    alt: caption,
    caption,
    width,
    height,
    page
  })
);

export const lightboxImages = Works.map(({ lightbox, caption, page }) => ({
  src: lightbox,
  alt: caption,
  caption,
  page
}));

export const portfolio = Works.filter(painting => painting.portfolio)
  .sort((a, b) => a.portfolio - b.portfolio)
  .map(
    ({ mosaic, width, height, caption, price, size, sizeText, noprints, page, nickname }) => ({
      src: mosaic,
      width,
      height,
      alt: caption,
      caption,
      price,
      size,
      sizeText,
      page: noprints ? page : `/checkout/${getCaption(nickname)}/original`
    })
  );
