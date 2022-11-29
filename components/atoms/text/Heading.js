import clsx from "clsx";

const Heading = ({ size, fontWeight, transform, color, children }) => {
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
            return <h2 className={headingClass}>{children}</h2>;
        case 'lg':
            return <h3 className={headingClass}>{children}</h3>;
        case 'sm':
            return <h5 className={headingClass}>{children}</h5>;
        case 'xs':
            return <h6 className={headingClass}>{children}</h6>;

        default:
            return <h4 className={headingClass}>{children}</h4>;
    }
};

export default Heading;