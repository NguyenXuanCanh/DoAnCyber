import React from 'react'
import CarouselBanner from './body/carouselBanner'
import CinemaListComponent from './body/cinemaList'
import FilmBlock from './body/filmBlock'
import FilterTool from './body/filter'
import Footer from './body/footer'
import IntroduceApp from './body/introduceApp'
import LineComponent from './body/line'
import NewsComponent from './body/newsComponent'
import UserLeftComponent from './body/userLeftComponent'
import UserRightComponent from './body/userRightComponent'
import AdminLeftComponent from './body/adminLeftComponent'
import AdminRightComponent from './body/adminRightComponent'

export default function Body(props) {
    let page = props.page;
    switch (page) {
        case 'home': {
            return (
                <div>
                    <CarouselBanner></CarouselBanner>
                    <FilterTool></FilterTool>
                    <FilmBlock></FilmBlock>
                    <LineComponent></LineComponent>
                    <CinemaListComponent></CinemaListComponent>
                    <NewsComponent></NewsComponent>
                    <IntroduceApp></IntroduceApp>
                    <Footer></Footer>
                </div>
            )
        }
        case 'user': {
            return (
                <div className="row user" style={{ width: '100%' }}>
                    <UserLeftComponent></UserLeftComponent>
                    <UserRightComponent></UserRightComponent>
                </div>
            )
        }
        case 'admin': {
            return (
                <div className="row user" style={{ width: '100%' }}>
                    <AdminLeftComponent></AdminLeftComponent>
                    <AdminRightComponent></AdminRightComponent>
                </div>
            )
        }
        default: return <div></div>
    }

}
