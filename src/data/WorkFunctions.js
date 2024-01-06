import Works from "./Works";

const pricingModel = [
    {
        series: "/gestures/",
        aspect: 1/1,
        small: {
            narrow: 12,
            wide: 12,
            price: 35
        },
        large: {
            narrow: 18,
            wide: 18,
            price: 50
        },
    },
    {
        series: "/gestures/",
        aspect: 3/4,
        small: {
            narrow: 9,
            wide: 12,
            price: 30
        },
        large: {
            narrow: 18,
            wide: 24,
            price: 75
        },
    },
    {
        series: "/gestures/",
        aspect: 2/3,
        small: {
            narrow: 8,
            wide: 12,
            price: 30
        },
        large: {
            narrow: 16,
            wide: 24,
            price: 75
        },
    },
    {
        series: "/analog-future/",
        aspect: 3/4,
        small: {
            narrow: 12,
            wide: 16,
            price: 45
        },
        large: {
            narrow: 18,
            wide: 24,
            price: 75
        },
    },
    {
        series: "/analog-future/",
        aspect: 2/3,
        small: {
            narrow: 12,
            wide: 18,
            price: 45
        },
        large: {
            narrow: 16,
            wide: 24,
            price: 75
        },
    },
    {
        series: "/apres-ski/",
        aspect: 4/5,
        small: {
            narrow: 8,
            wide: 10,
            price: 30
        },
        large: {
            narrow: 16,
            wide: 20,
            price: 60
        },
    },
    {
        series: "/apres-ski/",
        aspect: 2/3,
        small: {
            narrow: 12,
            wide: 8,
            price: 30
        },
        large: {
            narrow: 16,
            wide: 24,
            price: 75
        },
        xl: {
            narrow: 20,
            wide: 30,
            price: 110
        },
    },
    {
        series: "/apres-ski/",
        aspect: 3/4,
        small: {
            narrow: 9,
            wide: 12,
            price: 30
        },
        large: {
            narrow: 18,
            wide: 24,
            price: 80
        },
    }]

function getPricing(painting) {
    if (painting.noprints) {
        return {
            small: {
                size: "5x5",
                price: 0
            },
            large: {
                size: "10x10",
                price: 0
            },
        }
    }
    const aspect = ratio(painting.size)
    const length = painting.page.indexOf("/", 1) + 1
    const series = painting.page.substr(0,length)
    const details = pricingModel.find(x => x.series === series && Math.abs(x.aspect - aspect) < 0.01)
    var results = {
        small: {
            size:  isLandscape(painting.size)
             ? `${details.small.wide}" x ${details.small.narrow}"` 
             : `${details.small.narrow}" x ${details.small.wide}"`,
            price: `$${details.small.price}`
        },
        large: {
            size: isLandscape(painting.size)
             ? `${details.large.wide}" x ${details.large.narrow}"` 
             : `${details.large.narrow}" x ${details.large.wide}"`,
             price: `$${details.large.price}`
            }
    }

    if (details.xl) {
        results.xl = {
            size:  isLandscape(painting.size)
            ? `${details.xl.wide}" x ${details.xl.narrow}"` 
            : `${details.xl.narrow}" x ${details.xl.wide}"`,
           price: `$${details.xl.price}`           
        }
    }

    return results;
}

function formatFraction(value) {
    const inches = Math.trunc(value);
    const fractional = ((value - inches) * 8).toFixed() / 8;
    const fraction = (function (fractional) {
        switch (fractional) {
            case 0:
                return "";
            case 1 / 16:
                return "1/16";
            case 1 / 8:
                return "1/8";
            case 3 / 16:
                return "3/16";
            case 1 / 4:
                return "1/4";
            case 5 / 16:
                return "5/16";
            case 3 / 8:
                return "3/8";
            case 7 / 16:
                return "7/16";
            case 1 / 2:
                return "1/2";
            case 9 / 16:
                return "9/16";
            case 5 / 8:
                return "5/8";
            case 11 / 16:
                return "11/16";
            case 3 / 4:
                return "3/4";
            case 13 / 16:
                return "13/16";
            case 7 / 8:
                return "7/8";
            case 15 / 16:
                return "15/16";
            default:
                return "";
        }
    })(fractional);

    var text = inches ? inches : "";
    if (fractional) text += ` ${fraction}`;
    return text;
}

function ratio(size) {
    const dims = String(size).split("x");
    const w = Number(dims[0]);
    const h = Number(dims[1]);
    const result = w < h ? w / h : h / w;
    return result;
}

function isLandscape(size) {
    const dims = String(size).split("x");
    const w = Number(dims[0]);
    const h = Number(dims[1]);
    return w > h;
}

function makePretty(size) {
    // Guard against calling this twice
    if (String(size).indexOf("\"") > 0) return size;

    const dims = String(size).split("x");
    const w = Number(dims[0]);
    const h = Number(dims[1]);
    return `${w}" x ${h}"`;
}

function formatPrice(price) {
    const text = price.substr(0, 1) === "$" ? price.substr(1) : price;
    const number = parseInt(text);
    return `$${number.toLocaleString()}`
}

function Original(painting) {
    return {
        caption: `${makePretty(painting.size)} Acrylic on wood panel`,
        price: painting.sold ? "SOLD" : formatPrice(painting.price)
    }
}

function FullSizePrint(painting) {
    if (!painting.xlAvailable) {
        return LargePrint(painting)
    }
    const info = getPricing(painting).xl
    return {
        caption: `${info.size} Full-Size Giclée Print`,
        size: info.size,
        unformattedSize: info.size.replace(/[" "]/g, ""), // needed for default canvas wrap size
        price: info.price
    }
}

function LargePrint(painting) {
    const info = getPricing(painting).large
    return {
        caption: `${info.size} Large Giclée Print`,
        size: info.size,
        unformattedSize: info.size.replace(/[" "]/g, ""), // needed for default canvas wrap size
        price: info.price
    }
}

function SmallPrint(painting) {
    const info = getPricing(painting).small
    return {
        caption: `${info.size} Small Giclée Print`,
        size: info.size,
        price: info.price
    } 
}

function calcCanvasPrice(area) {
    // Cost is $60 for 8x12 plus $0.30 per square inch of additional area
    // based on reverse engineering the pricing of PosterBurner, this yields
    // a markup of 74-89%
    const basePrice = 60;
    const minArea = 8 * 12;
    const perInch = 0.30;
    const price = Math.round(basePrice + (area - minArea) * perInch);
    return price;
}

function CanvasPrint(painting, desiredWidth) {
    const dims = String(painting.size).split("x");
    const originalWidth = Number(dims[0]);
    const originalHeight = Number(dims[1]);
    const isPortrait = originalWidth < originalHeight;
    const minWidth = isPortrait ? 8 : 12;
    const maxWidth = isPortrait ? 24 : 36;
    const aspect = originalWidth / originalHeight;

    var width = originalWidth;
    if (Number(desiredWidth)) {
        if (desiredWidth < minWidth) {
            width = minWidth;
        } else if (desiredWidth > maxWidth) {
            width = maxWidth;
        } else {
            width = desiredWidth;
        }
    }

    const height = width / aspect;
    const dimensions = `${width}" x ${formatFraction(height)}"`;
    const area = width * height;
    const price = `$${calcCanvasPrice(area)}`;

    return {
        caption: `${dimensions} Canvas Print`,
        width: width,
        size: dimensions,
        price: price,
        minWidth: minWidth,
        maxWidth: maxWidth
    }
}

function compareNicknameOrCaption(text, work) {
    const nickname = text.toLocaleLowerCase()
    const caption = nickname.replace(/[ ]/g, "-")
    return nickname === work.nickname.toLocaleLowerCase()
      || caption === work.caption.toLocaleLowerCase().replace(/[ ]/g, "-")
}
function Find(nickname) {
    return Works.find(element => compareNicknameOrCaption(nickname, element))
}

function FindPrev(nickname) {
    const index = Works.findIndex(element => compareNicknameOrCaption(nickname, element))
    const prevIndex = (index - 1 + Works.length) % Works.length
    return Works[prevIndex]
}

function FindNext(nickname) {
    const index = Works.findIndex(element => compareNicknameOrCaption(nickname, element))
    const nextIndex = (index + 1 + Works.length) % Works.length;
    return Works[nextIndex]
}

function GetUrl(painting) {
    return window.location.origin + painting?.page;
}

function GetPage(painting) {
    return painting?.page;
}

function GetInfo(painting, format) {
    switch (format.toLowerCase()) {
        case "original": return Original(painting);
        case "xl": return FullSizePrint(painting);
        case "large": return LargePrint(painting);
        case "small": return SmallPrint(painting);
        default: return CanvasPrint(painting, format);
    }
}

function GetSeries(painting) {
    const length = painting.page.indexOf("/", 1) + 1;
    const series = painting.page.substr(0,length);
    return series;
}

function GetGsm(painting) {
    return GetSeries(painting) === "/apres-ski/" ? 230 : 300;
}

export { Find, FindPrev, FindNext, GetUrl, GetPage, GetInfo, GetSeries, GetGsm, SmallPrint, LargePrint, FullSizePrint, CanvasPrint, makePretty }