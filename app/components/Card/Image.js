import { CardMedia } from '@mui/material'

const CardImage = () => {
    return (
        <>
            <div className='hidden lg:flex ' >
                <CardMedia
                    sx={{ height: 320, width: "100%" }}
                    image="/home2.jpg"
                    title="green iguana"
                />
            </div>
            <div className='flex lg:hidden  ' >
                <CardMedia
                    sx={{ height: 320, width: 560}}
                    image="/home2.jpg"
                    title="green iguana"
                />
            </div>
        </>
    )
}

export default CardImage