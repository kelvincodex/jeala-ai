export class FramerConfigUtil {
    static base = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    static scroll = {
        hidden: { opacity: 0, x: -100 },
        show: {opacity: 1, x: 0},

    }

    static item = {
        hidden: { opacity: 0, x: -1000 },
        show: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 1000 },
    }

    static item2 = {
        show: {
            y: -10,
            opacity: 0.8,
            transition: { duration: 0.1 },
        },
    }

}
