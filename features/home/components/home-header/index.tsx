import React from "react"
import { TouchableOpacity, View, ImageBackground, Image } from "react-native"
import {twMerge} from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Text } from "components/base"
import { VW } from "utils"
import { useAuthStore } from "stores"
import dayjs from "dayjs"
import { useGetComplaintCount } from "features/complaint"

export const HomeHeader = () => {

    const { navigate } = useNavigation<StackNavigation>()

    const auth = useAuthStore((state: any) => state.auth)

    const totalNotif = useGetComplaintCount()

    const today = dayjs().format("dddd, DD MMMM YYYY")

    return (
        <ImageBackground
            source={require('assets/images/home-header.png')}
            className="w-[100%]"
            style={{
                height: VW / 1.5
            }}
            borderBottomRightRadius={spacing.large}
            borderBottomLeftRadius={spacing.large}
        >
            <View className="flex-row items-start justify-between px-5 pt-10">
                <View className="">
                    <View className="flex-row items-center mb-3">
                        <View
                            className="rounded-full bg-neutral-400"
                        >
                            <Image
                                source={{ uri: auth?.pengguna_foto }}
                                className="w-[60px] h-[60px]"
                                borderRadius={100}
                            />
                        </View>

                        <View className="ml-3">
                            <Text textClassName="text-xl text-white" variant="bold">{auth?.pengguna_nama}</Text>
                            <Text textClassName="text-lg text-white" variant="medium">Warga</Text>
                        </View>
                    </View>

                    <Text textClassName="text-md text-white" variant="medium">{today}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigate('Complaint')}
                >
                    <BellIcon width={50} height={50} color={colors.text} />

                    {typeof totalNotif === 'number' && totalNotif > 0 && (
                        <View className="w-4 h-4 rounded-full bg-red-500 absolute top-1 right-1" />
                    )}
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}