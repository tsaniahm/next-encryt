import clsx from "clsx";

const P = ({ size, fontWeight, transform, color, children }) => {
    const sizingClass = clsx({
        'text-6xl': size === '3xl',
        'text-5xl': size === '2xl',
        'text-4xl': size === 'xl',
        'text-3xl': size === 'lg',
        'text-2xl': !size || size === 'md',
        'text-xl': size === 'sm',
        'text-base': size === 'xs',
    });

    const fontWeightClass = clsx({
        'font-bold': fontWeight === 'bold',
        'font-semibold': fontWeight === 'semibold',
        'font-medium': !fontWeight || fontWeight === 'normal'
    })

    const transformClass = clsx({
        'uppercase': transform === 'uppercase',
        'lowercase': transform === 'lowercase',
        'normal-case': !transform || transform === 'normal'
    })

    const colorClass = clsx({
        'text-black': color === 'black',
        'text-white': color === 'white'
    })

    const baseClass = ' font-poppins font-semibold';
    const headingClass = `${baseClass} ${sizingClass} ${fontWeightClass} ${transformClass} ${colorClass}`;

    switch (size) {
        case 'xl':
            return <p className={headingClass}>{children}</p>;
        case 'lg':
            return <p className={headingClass}>{children}</p>;
        case 'sm':
            return <p className={headingClass}>{children}</p>;
        case 'xs':
            return <p className={headingClass}>{children}</p>;

        default:
            return <p className={headingClass}>{children}</p>;
    }
};

export default P;