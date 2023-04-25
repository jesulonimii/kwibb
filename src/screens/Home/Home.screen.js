import React, {useContext, useEffect} from 'react';
import {Button, Image, ScrollView, Text, TextInput, View} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import Logo from '../../assets/icons/icon.svg';
import CustomButton from "../../components/ui/CustomButton.ui";
import {Card} from "../../components/ui";
import {Body} from "../../components/layout";
import {GLOBAL} from "../../utils";
import {ScreenContext} from "../../context";
import moment from "moment";
import nike from "../../assets/images/nike.png";
import Swiper from 'react-native-swiper'


function HomeScreen(props) {

    const {active_screen, setActiveScreen} = useContext(ScreenContext)

    useEffect(() => {
        setActiveScreen("home")
    }, [])


    const {className = ''} = props

    const name = "William"



    const customPagination = {
        paginationStyle : {bottom: -24, left: 0, right: 0},
        dot : <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 7, height: 7,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />,
        activeDot : <View style={{backgroundColor: GLOBAL.theme_color, width: 19, height: 7, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
    }


    const img1 = [
        "https://preppykitchen.com/wp-content/uploads/2022/02/Baked-Donuts-Recipe.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
        "https://n.nordstrommedia.com/id/sr3/8b32d747-e7ee-48ea-9775-52c7b4f84b04.jpeg?h=365&w=240&dpr=2",
        "https://cdn.littlebluehouse.com/product_images/buffalo-plaid-mens-heritage-button-down-shirt/BDMPLAD012_jpg/pdp_zoom.jpg?c=1671116607&locale=us_en",
    ]

    const img2 = [
        "https://www.chefspencil.com/wp-content/uploads/Amala-and-Ewedu-Soup-1.jpg",
        "https://nb.scene7.com/is/image/NB/mt03558ecl_nb_70_i?$pdpflexf2$&wid=440&hei=440",
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70",
        "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$",]

    const img3 = [
        "https://images.food52.com/e6RyxggWQpBwCPcd3kugqz01J54=/2016x1344/filters:format(webp)/583d2633-65c0-43d6-9b52-cba0c8fa1399--2019-1210_nigerian-jollof-rice_3x2_rocky-luten_006.jpg",
        "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$",
        "https://nb.scene7.com/is/image/NB/mt03558ecl_nb_70_i?$pdpflexf2$&wid=440&hei=440",
        "https://www.chefspencil.com/wp-content/uploads/Amala-and-Ewedu-Soup-1.jpg",
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70",
    ]


    const day = moment().format("dddd")

    const homeCategories = [
        {name: "Featured Products", list: img1},
        {name: "Top picks for you", list: img2},
        {name: `${day} Buzz`, list: img3}
]




    return (
        <View className="flex-1">
            
            <View className="w-full drop-shadow flex-row bg-white p-4 h-14 items-center justify-between">
                
                <Image className="w-8 aspect-square rounded-full" source={{uri : "https://jesulonimii.codes/img/me.jpg"}} />

                <View className="w-8">
                    <Logo />
                </View>

                <Icons.ShoppingBagIcon className="w-full text-gray-500" />


            </View>


            <Body>

                <Card>

                    <Text className="font-outfit-medium text-gray-800 text-xl">
                        {/*{moment().format("A") === "AM" ? "Good morning " : "Good day "}*/}

                        {

                            moment().format("HH") < 12 ? ("Good morning ") : moment().format("HH") < 16 ? ("Good afternoon ") : ("Good evening ")

                        }

                        <Text className="text-primary">{name}</Text>,
                    </Text>

                    <Text className="text-gray-400 mt-1">
                        What do you need today?
                    </Text>

                    <TextInput className="bg-gray-100 rounded-lg mt-4 p-3 w-full" placeholder="Search for a product (ex: thrift, shoes, jeans)" />

                    <CustomButton title={"Search"} style={"bg-primary my-2"} />



                </Card>

                <Card style="mt-4 flex-1 h-fit mb-8 pb-4 p-0 py-2  justify-start">


                    {

                        homeCategories.map((item, index) =>{

                            return (

                                <View key={index} className="w-full h-64 flex-1 p-3 mb-2">

                                    <Text className="text-md capitalize font-outfit-medium" >{item.name}</Text>

                                    <Swiper className="mt-4 rounded-lg" {...customPagination}  autoplay loop={false}  horizontal={true}>

                                        {

                                            item.list.map((item, index) => (

                                                    <View  className="w-full h-full rounded-lg border-1 border-gray-300 bg-red-500 justify-center" key={index}>

                                                        <Image className="w-full rounded-lg flex-1" source={{uri: item}}/>


                                                    </View>



                                                )
                                            )

                                        }

                                    </Swiper>

                                </View>

                            )

                        })
                    }




                </Card>






            </Body>




        </View>
    );
}


export default HomeScreen;