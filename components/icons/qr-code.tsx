import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const QrCodeIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            {...props}>
            <Path
                d="M0 .781A.781.781 0 0 1 .781 0H5.47a.781.781 0 0 1 0 1.563H1.562v3.906a.781.781 0 0 1-1.562 0V.78Zm18.75 0A.781.781 0 0 1 19.531 0h4.688A.781.781 0 0 1 25 .781V5.47a.781.781 0 1 1-1.563 0V1.562h-3.906a.781.781 0 0 1-.781-.78ZM.781 18.75a.781.781 0 0 1 .781.781v3.907H5.47a.781.781 0 1 1 0 1.562H.78A.781.781 0 0 1 0 24.219V19.53a.781.781 0 0 1 .781-.781Zm23.438 0a.781.781 0 0 1 .781.781v4.688a.781.781 0 0 1-.781.781H19.53a.781.781 0 1 1 0-1.563h3.907v-3.906a.781.781 0 0 1 .78-.781ZM6.25 6.25h1.563v1.563H6.25V6.25Z"
                fill={color}
            />
            <Path
                d="M10.938 3.125H3.125v7.813h7.813V3.125Zm-6.25 1.563h4.687v4.687H4.687V4.687Zm3.125 12.5H6.25v1.562h1.563v-1.563Z"
                fill={color}
            />
            <Path
                d="M10.938 14.063H3.125v7.812h7.813v-7.813Zm-6.25 1.562h4.687v4.688H4.687v-4.688Zm12.5-9.375h1.562v1.563h-1.563V6.25Z"
                fill={color}
            />
            <Path
                d="M14.063 3.125h7.812v7.813h-7.813V3.125Zm1.562 1.563v4.687h4.688V4.687h-4.688ZM12.5 12.5v3.125h1.563v1.563H12.5v1.562h3.125v-3.125h1.563v3.125h1.562v-1.563h3.125v-1.562h-4.688V12.5H12.5Zm3.125 3.125h-1.563v-1.563h1.563v1.563Zm6.25 3.125h-1.563v1.563h-3.125v1.562h4.688V18.75Zm-6.25 3.125v-1.563H12.5v1.563h3.125Z"
                fill={color}
            />
            <Path d="M18.75 14.063h3.125V12.5H18.75v1.563Z" fill={color} />
        </Svg>
    )
};