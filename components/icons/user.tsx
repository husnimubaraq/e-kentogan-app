import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const UserIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            {...props}>
            <Path
                d="M9.357 10.598c1.496 0 2.791-.523 3.85-1.553C14.265 8.015 14.8 6.755 14.8 5.3s-.536-2.717-1.595-3.747C12.149.522 10.854 0 9.357 0c-1.495 0-2.79.522-3.849 1.552C4.45 2.582 3.913 3.842 3.913 5.3c0 1.456.537 2.716 1.595 3.746 1.059 1.03 2.354 1.553 3.85 1.553zM6.445 2.463c.812-.79 1.765-1.175 2.912-1.175 1.148 0 2.1.384 2.913 1.175.812.79 1.207 1.718 1.207 2.835s-.395 2.044-1.207 2.835c-.812.79-1.765 1.174-2.913 1.174-1.147 0-2.1-.384-2.912-1.174-.812-.79-1.207-1.718-1.207-2.835s.395-2.045 1.207-2.835zM18.883 16.917c-.03-.429-.092-.896-.183-1.39-.092-.498-.21-.968-.351-1.398a6.81 6.81 0 00-.59-1.303 4.932 4.932 0 00-.89-1.13 3.943 3.943 0 00-1.28-.781 4.527 4.527 0 00-1.632-.288c-.23 0-.454.092-.885.365-.265.169-.575.363-.921.579-.296.183-.697.355-1.193.511-.483.152-.974.23-1.459.23-.484 0-.975-.078-1.458-.23-.495-.155-.896-.328-1.192-.511-.343-.213-.653-.408-.923-.579-.43-.273-.653-.365-.884-.365a4.52 4.52 0 00-1.632.288 3.937 3.937 0 00-1.279.782 4.934 4.934 0 00-.89 1.129c-.245.42-.444.859-.59 1.303-.141.43-.26.9-.351 1.398-.091.493-.153.96-.183 1.39-.03.42-.045.858-.045 1.3 0 1.148.375 2.078 1.114 2.763.73.677 1.697 1.02 2.873 1.02h10.883c1.175 0 2.141-.343 2.872-1.02.74-.685 1.115-1.615 1.115-2.764 0-.443-.016-.88-.046-1.299zm-1.982 3.13c-.483.447-1.124.664-1.96.664H4.06c-.836 0-1.477-.217-1.96-.664-.473-.44-.703-1.038-.703-1.83 0-.413.014-.82.042-1.21.027-.384.083-.805.165-1.252a9.47 9.47 0 01.31-1.232c.118-.36.28-.717.48-1.06.191-.328.411-.609.654-.835.227-.212.513-.385.85-.515a3.12 3.12 0 011.044-.195c.046.024.129.07.262.154.273.173.587.37.933.586.392.242.895.462 1.497.65a6.212 6.212 0 001.867.293c.623 0 1.25-.099 1.866-.292.602-.19 1.106-.409 1.497-.652.356-.22.66-.412.933-.585a3.6 3.6 0 01.263-.154c.38.01.73.075 1.043.195.337.13.623.304.85.515.243.226.463.507.655.835.2.343.362.7.48 1.06.124.375.228.79.31 1.232.082.448.138.87.165 1.252.028.39.042.796.042 1.21 0 .792-.23 1.39-.703 1.83z"
                fill={color}
            />
        </Svg>
    )
};