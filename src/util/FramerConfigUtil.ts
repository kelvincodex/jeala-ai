export class FramerConfigUtil {
    static base = {
        initial: { opacity: 0 },
        view: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    static scroll = {
        initial: { opacity: 0, x: -100 },
        view: {opacity: 1, x: 0},

    }

    static item = {
        initial: { opacity: 0, x: -1000 },
        view: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 1000 },
    }

}
