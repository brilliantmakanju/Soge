import Link from 'next/link';
import CardImage from './Image';
import CardText from './Text';

export default function Card() {
    return (
        <>
            <div className=" min-w-[22.4rem] grid grid-cols-1 rounded-lg shadow-lg">
                <CardImage />
                <Link href={"/"}>
                    <CardText />
                </Link>
            </div>
        </>

    );
}