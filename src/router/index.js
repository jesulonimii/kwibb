import {Settings, View} from "react-native";
import {Route, Routes} from "react-router-native";
import {twMerge} from "tailwind-merge";
import {FavouritesScreen, Home, NotificationScreen, SearchScreen} from "../screens/Home";



function Router(props) {

    const {className = ''} = props

    const routes = [
        {
            path: '/',
            component: <Home/>
        },
        {
            path: '/search',
            component: <SearchScreen/>
        },
        {
            path: '/favourites',
            component: <FavouritesScreen/>
        },
        {
            path: '/settings',
            component: <NotificationScreen/>
        },
    ]



    return (
        <View className={twMerge(`w-full flex-1 ${className}`)}>

            <Routes>

                {
                    routes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.component}/>
                    })
                }

            </Routes>

        </View>
    );
}


export default Router;