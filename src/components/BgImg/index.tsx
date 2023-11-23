import { PropsWithChildren } from "react"

type BgImgProps = PropsWithChildren & {
    href: string
}

export const BgImg = ({ href, children }: BgImgProps) => {
    return (
        <div style={{
            backgroundImage: `url(${href})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor:'#f5f5f5',
        }}>
            {children}
        </div>
    )
}
